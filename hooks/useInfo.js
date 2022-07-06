import { useEffect, useState } from "react";
import getInfoData from "../services/getInfoData";

export function useInfo() {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)

    async function getInfo(){
        setLoading(true)

        const data = await getInfoData()
        setInfo(data)

        setLoading(false)
    }

    useEffect(() => {
        getInfo()
    }, []);

    return { info, getInfo, loading };
}