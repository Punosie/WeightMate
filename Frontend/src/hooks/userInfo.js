import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserInfo } from "@/services/userService";

const useUserInfo = () => {
    const user = useSelector((state) => state.auth.user);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (!user?.uid) return;

        const fetchUserInfo = async () => {
            try {
                const userData = await getUserInfo(user.uid);
                console.log("User data:", userData.user);
                setUserInfo(userData.user);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchUserInfo();
    }, [user?.uid]);

    return userInfo;
};

export default useUserInfo;
