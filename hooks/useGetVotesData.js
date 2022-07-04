import { useEffect, useState } from "react";
import getVotesData from "../services/getVotesData";

export function useGetVotesData() {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        setVotes(getVotesData)
    }, []);

    return { votes };
}