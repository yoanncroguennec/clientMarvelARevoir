import { Typography } from '@mui/material';
import React from 'react'
import { useLocation } from "react-router-dom"


export default function CardComic() {

    let location = useLocation();

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
