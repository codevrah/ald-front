import axios from "axios";
import { baseURL } from "../config";

/*
Expected data:

{
    user: "User token", 
    type: "Type of vote",
}
*/

export default async function createVote (data) {
    const response = await axios.post(`${baseURL}/api/votes`, data);
    return response.json();
}