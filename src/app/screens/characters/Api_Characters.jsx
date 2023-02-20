import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardCharacter from '../../components/common/card/ListCharacters';
import Loader from '../../components/layouts/animations/Loader';



export default function Api_Characters() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    // const [skip, setSkip] = useState(2);
    // const [limit, setLimit] = useState(5);
    // const [search, setSearch] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/characters`,
                    // `/api/characters?name=${search}&skip=${skip}&limit=${limit}`
                );
                console.log(response.data);
                setData(response.data);
                // I set isLoading to false
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

    // function nextPage() {
    //     setSkip(skip + limit)
    // }

    return isLoading
        ?   <Loader />
        :   <CardCharacter charaters={data} />    
}
