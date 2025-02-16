import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, setLoading } from "../redux/slices/authSlice";
import { auth } from "../firebase/config"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth";

const AuthListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true)); // Start loading

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }));
            } else {
                dispatch(setUser(null));
            }
        });

        return () => unsubscribe(); // Cleanup the listener on unmount
    }, [dispatch]);

    return null;
};

export default AuthListener;