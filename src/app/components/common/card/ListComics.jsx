import React, { useState } from 'react'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
// UTILS FUNCTIONS
import { truncate } from '../../../utils/functions/FuncTruncate';
// STYLES
import { RootHome } from './StyledCard';
import "./test.css"

export default function ListComics({ comics }) {

    const [first, setfirst] = useState(true)

    const [title] = useState()
    const [urlIMG] = useState()
    const [desc] = useState()

    return <RootHome>
                {comics.results.map((comic) => {

                    // Constante image
                    const urlImg = `${comic.thumbnail.path + "." + comic.thumbnail.extension}`

                    return(
                        <Link
                            to={`/cardComic/${comic._id}`} style={{ textDecoration: "none" }}
                            state= {{
                                title: `${comic.title}`,
                                urlIMG: `${urlImg}`,
                                desc: `${comic.description}`
                            }}
                        >
                            <div class="container">
                                <div class="card">
                                    <div class="front">
                                        <img src={
                                            first
                                            ? `${urlImg}`
                                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                        }
                                        style={{ border: "5px solid #333", borderRadius: "30px", height: "100%", width: "100%"}} />
                                    </div>
                                    <div class="back" style={{ background: "#FFF", border: "5px solid #000", height: "400px", width: "250px"}}>
                                        <Typography variant='h5' align='center'>{comic.title}</Typography>
                                        <Typography>
                                            {comic.description
                                                ? `${truncate(`${comic.description}`, 250)}`
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
