import axios from "axios";
import { baseURL } from "../config";

export default async function getUserHasVoted(access_token, questionID) {
    const response = await axios.get(`${baseURL}/api/users?question=${questionID}`, {
        headers: {
            "access_token": access_token,
            "Content-Type": "application/json"
        }
    });
    return response.data;
}