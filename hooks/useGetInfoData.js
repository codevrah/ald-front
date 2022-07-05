import { useEffect, useState } from "react";
import getInfoData from "../services/getInfoData";

export function useGetInfoData() {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        async function getInfo(){
            const data = await getInfoData()
            setVotes(data)
        }
        getInfo()
    }, []);

    return { votes };
}