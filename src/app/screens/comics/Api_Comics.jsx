import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardComic from '../../components/common/card/ListComics';
import Loader from '../../components/layouts/animations/Loader';

export default function Api_Comics() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/comics`,
                    // `/api/comics/ApiLeReacteur?skip=${skip}&limit=${limit}`,
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
    }, [])

    return isLoading
        ?   <Loader />
        :    <CardComic comics ={data} />
}
