import axios from "axios";
import { baseURL } from "../../config";

export default async function getInfoData() {
    const response = await axios.get(`${baseURL}/api/votes`);
    return response.data;
}