import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material';
// IMPORT "TIPPY" => SHOW TOOLTIP
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../utils/redux/actions/AuthActions'
// ICONS
import { BiUserCircle } from "react-icons/bi"


const menu = [
    {
        name: "Personnage",
        url: "/apiCharacters",
    },
    {
        name: "Comics",
        url: "/apiComics",
    }
]

export default function Navbar() {

    // SCROLL NAV
    const [nav, setNav] = useState(false)
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }else{
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    // Show Toggle Menu
    const [showToggleMenu, setShowToggleMenu]=useState(false)

    const { user, loading } = useSelector(state => state.auth)
    console.log(user);

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

  return (
    <nav className={nav ? "nav active" :"nav"}>
        <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant='h4' color="red" sx={{ fontWeight: "bold" }}>MARVEL</Typography>
        </Link> 
        
        {menu.map((item) => (
            <Link to={item.url}>
                {item.name}
            </Link>
        ))}

        {user ? (
            <>
                <div onClick={()=>setShowToggleMenu(!showToggleMenu)}>
                    <img
                        src={user.avatar && user.avatar.url}
                        alt={user && user.name}
                        style={{ }}
                    />
                    <span>{user && user.name}</span>
                </div>
                {showToggleMenu
                    ?   <Link to="/" onClick={logoutHandler}>Logout</Link>
                    :   null
                }
            </>
        ) : !loading &&
                <Tippy content={
                    <span style={{color: "orange"}}>Se Connecter</span>
                }>
                    <Link to="/login"><BiUserCircle  size={35} /></Link>
                </Tippy> 
        }
    </nav>
  )
}
