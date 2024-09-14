import axios from "axios";
import { useState, useEffect } from "react";
export const useApi = () => {
    const [destination, setDestination] = useState([])
    const [crew, setCrew] = useState([])
    const [technology, setTechnology] = useState([])
    const getData = async () => {
        const rs = await axios.get('data.json')
        setDestination(rs.data.destinations)
        setCrew(rs.data.crew)
        setTechnology(rs.data.technology)
    }
    useEffect(() => { getData() }, []);
    return { destination, crew, technology }
}
