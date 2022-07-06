import { useEffect, useState } from "react";
import getVotesData from "../services/getVotesData";

export function useVotes(questionID) {
    const [votes, setVotes] = useState([])
    const [loading, setLoading] = useState(true)

    async function getVotes() {
        setLoading(true)

        const data = await getVotesData(questionID)
        setVotes(data)
        
        setLoading(false)
    }

    useEffect(() => {
        getVotes()
    }, [questionID])

    return { votes, getVotes, loading };
}