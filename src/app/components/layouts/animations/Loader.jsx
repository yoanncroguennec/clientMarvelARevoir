import React from 'react'
import { CircleLoader } from 'react-spinners'


export default function Loader() {
    return (
        <div style={{ alignItems: "center", display: "flex", height: "100vh", justifyContent: "center", width: "100vw" }}>
            <CircleLoader size={100} color={"#3d2514"} /> 
        </div>
    )
}
