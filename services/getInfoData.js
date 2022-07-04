import axios from "axios";
import { baseURL } from "../config";

/*
Expected response:

{
    inFavor: 1000,
    against: 100,
    inFavorPercent: 52,
    againstPercent: 48,
    votesLeft: 100,
}
*/

export default async function getInfoData() {
    const response = await axios.get(`${baseURL}/api/questions`, {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:3001'
        }
    });
    return response.json();
}