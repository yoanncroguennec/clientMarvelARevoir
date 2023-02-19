import React, { useState } from "react";
import { Container } from '@mui/material';
// REACT-SLICK
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// DATAS
import { bgSlideLandingPage } from '../../utils/assets/data/DataBgSlideLandingPage'
import Login from "../../screens/auth/login/Login";
import Register from "../../screens/auth/register/Register";


const style = {
    bgcolor: 'rgba(0, 0, 0, 0.8)',
    border: '2px solid #000',
    borderRadius: "20px",      
    boxShadow: 24,
    color: "#FFF",
    left: '50%',
    height: "500px",
    padding: "50px", 
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
};


export default function LandingPage() {

    const [conditionModalAuth, setConditionModalAuth] = useState(true)

    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1, // Montrer le nombre de Slide
        //   slidesToScroll: 4,
        //   initialSlide: 0,
    }

    // MODAL
    const [ open ] = useState(true);


    return (
        <>
            <Slider {...settings} style={{ background: ""}}>
                {bgSlideLandingPage.map((bgSlide) => {
                    return(
                        <Container sx={{ background: "", backgroundImage: `url(${bgSlide.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", width: "100vw"}} />
                    )
                })}
            </Slider>
            {conditionModalAuth
                ?   <Login conditionModalAuth={conditionModalAuth} setConditionModalAuth={setConditionModalAuth} open={open} />
                :   <Register conditionModalAuth={conditionModalAuth} setConditionModalAuth={setConditionModalAuth} open={open}  />
            }
        </>
    )
}
