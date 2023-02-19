import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Typography } from '@mui/material';
import { useLocation, useParams } from "react-router-dom"


export default function CardCharacter() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    let location = useLocation();
    //! Je récupère l'id présent dans l'url
    const params = useParams();
    const characterId = params.characterId;
    // console.log(params);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://site--mymarvel--hw4gvwsxlwd5.code.run/character/${characterId}`
                );
                console.log(response.data);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ alignItems: "center", color: "#FFF", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "150px" }}>
            <div style={{ alignItems: "center", display: "flex", flexWrap: "nowrap", justifyContent: "center" }}>
                <img src={location.state.urlIMG} style={{ border: "10px solid #000", marginRight: "100px", width: "550px" }} />
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", width: "600px"}}>
                    <Typography variant='h4'>{location.state.title}</Typography>
                    <Typography>{location.state.desc}</Typography>
                </div>
            </div>
        </div>
    )
}
