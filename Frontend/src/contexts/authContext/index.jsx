import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../../firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

function useAuthProvider() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [photoURL, setPhotoURL] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setPhotoURL(user.photoURL);
            } else {
                setUser(null);
                setPhotoURL(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        userLoggedIn: !!user,
        loading,
        photoURL,
    };
}

// Authentication Provider Component
export function AuthProvider({ children }) {
    const authState = useAuthProvider();

    return (
        <AuthContext.Provider value={authState}>
            {!authState.loading && children}
        </AuthContext.Provider>
    );
}

// Custom Hook for Using Auth Context
export function useAuth() {
    return useContext(AuthContext);
}