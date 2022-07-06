import axios from "axios";
import { baseURL } from "../../config";

export default async function createVote (data, access_token) {
    const response = await axios.post(`${baseURL}/api/votes`, data, {
        headers: {
            "access_token": access_token,
            "Content-Type": "application/json"
        }
    });
    return response;
}