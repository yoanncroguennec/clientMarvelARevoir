import React, { useState } from 'react'
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// UTILS FUNCTIONS
import { truncate } from '../../../utils/functions/FuncTruncate';
// STYLES
import { RootHome } from './StyledCard';
import "./test.css"


export default function ListCharacters({ charaters, nextPage }) {

    const [name] = useState()
    const [urlIMG] = useState()
    const [desc] = useState()

    return <RootHome>
                {charaters.results.map((charater) => {

                    // Constante image
                    const urlImg = `${charater.thumbnail.path + "." + charater.thumbnail.extension}`

                    return (
                        <Link
                            to={`/cardCharacter/${charater._id}`} style={{ textDecoration: "none" }}
                            state= {{
                                name: `${charater.name}`,
                                urlIMG: `${urlImg}`,
                                desc: `${charater.description}`
                            }}
                        >
                            
                            <div class="container">
                                <div class="card">
                                    <div class="front">
                                        <img src={charater.thumbnail.path + "." + charater.thumbnail.extension}
                                        style={{ border: "5px solid #333", borderRadius: "30px", height: "100%", width: "100%"}} />
                                    </div>
                                    <div class="back" style={{ background: "#FFF", border: "5px solid #000", height: "400px", width: "250px"}}>
                                        <Typography variant='h5' align='center'>{charater.name}</Typography>
                                        <Typography>
                                            {charater.description
                                                ? `${truncate(`${charater.description}`, 250)}`
                                                : "Pas de Description"
                                            }
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
    </RootHome>
}
