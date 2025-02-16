import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const initialState = {
    user: null,
    loading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload) {
                state.user = {
                    uid: action.payload.uid,
                    email: action.payload.email,
                    displayName: action.payload.displayName,
                    photoURL: action.payload.photoURL
                };
            } else {
                state.user = null;
            }
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});


export const { setUser, setLoading } = authSlice.actions;

// Async Listener for Firebase Auth Changes
export const listenForAuthChanges = () => (dispatch) => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
        dispatch(setUser(user || null));
    });
};

export default authSlice.reducer;
