import { useEffect, useState } from "react";
import getVotesData from "../services/getVotesData";

export function useGetVotesData(questionID) {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        async function getData(){
            const data = await getVotesData(questionID)
            setVotes(data)
        }
        getData()
    }, [questionID]);

    return { votes };
}