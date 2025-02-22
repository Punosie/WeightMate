import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const createUser = async (uid, name, email, mobile, age, gender, height, currentWeight, targetWeight, family) => {
    try {
        const response = await axios.post(`${URL}api/user/create`, {
            uid: uid,
            name: name,
            email: email,
            mobile: mobile,
            age: age,
            gender: gender,
            height: height,
            currentWeight: currentWeight,
            targetWeight: targetWeight,
            family: family
        });

        return response.data;
    }catch(err){
        throw err.response?.data?.message || "Something went wrong";
    }
}


const getUser = async (uid) => {
    try {
        const response = await axios.get(`${URL}api/user/${uid}`);
        return response.data;
    }catch(err){
        throw err.response?.data?.message || "Something went wrong";
    }
}



export {createUser};