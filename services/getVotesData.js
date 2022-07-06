import axios from "axios";
import { baseURL } from "../../config";

export default async function getVotesData(questionID) {
    const response = await axios.get(`${baseURL}/api/users?question=${questionID}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
}