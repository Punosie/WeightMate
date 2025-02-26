import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const getAllWeights = async () => {
    try {
        const response = await axios.get(`${URL}api/weight/getAllWeight`);
        return response.data;
    }catch(err){
        throw err.response?.data?.message || "Something went wrong";
    }
}

const getWeight = async (uid) => {
    try{
        const response = await axios.get(`${URL}api/weight/get/${uid}`);
        return response.data.weight.weights;
    } catch(err){ 
        throw err.response?.data?.message || "Something went wrong";
    }
}

const addWeight = async (uid, weight, date) => {
    try {
        const response = await axios.post(`${URL}api/weight/add/${uid}`, {
            weight: parseFloat(weight),
            date: date
        });
        return response.data;
    }catch(err){
        throw err.response?.data?.message || "Something went wrong";
    }
}

const deleteAllWeights = async (uid) => {
    try {
        const response = await axios.delete(`${URL}api/weight/deleteAll/${uid}`);
        return response.data;
    }catch(err){
        throw err.response?.data?.message || "Something went wrong";
    }
}

const deleteWeight = async (uid, date) => {
    try {
        console.log("Date:", date);
        const response = await axios.delete(`${URL}api/weight/delete/${uid}`,{
            data: { date }
        });
        return response.data;
    }catch(err){
        throw err.response?.data?.message || "Something went wrong";
    }
}

export {getAllWeights, addWeight, deleteAllWeights, deleteWeight, getWeight};