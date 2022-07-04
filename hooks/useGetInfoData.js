import { useEffect, useState } from "react";
import getInfoData from "../services/getInfoData";

export function useGetInfoData() {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        setVotes(getInfoData)
    }, []);

    return { votes };
}