import axios from "axios";
import { baseURL } from "../config";

/*
Expected response:
[{
    user: {
        name: "John Doe",
        avatar: "https://avatars0.githubusercontent.com/u/1234?s=460&v=4",
        facebookProfileUrl: "https://www.facebook.com/john.doe",
    }
}]
*/

export default async function getVotesData() {
    const response = await axios.get(`${baseURL}/api/votes`);
    return await response.json();
    
}