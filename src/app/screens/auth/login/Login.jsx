import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Modal, Fade, Typography, Button } from '@mui/material';

import Loader from '../../../components/layouts/animations/Loader'
// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../../utils/redux/actions/AuthActions'
// STYLES
import { StylesTextFieldForm } from '../../../components/layouts/styles/StylesTextFieldForm'
import "../../../components/layouts/design/auth/StyledBtnAuth.css"


const style = {
    bgcolor: 'rgba(0, 0, 0, 0.8)',
    border: '2px solid #000',
    borderRadius: "20px",      
    boxShadow: 24,
    color: "#FFF",
    left: '50%',
    height: 400,
    padding: "50px", 
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
};


export default function Login({ conditionModalAuth, setConditionModalAuth, open }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if (isAuthenticated) {
            navigate(`/apiCharacters`)
        }

        if (error) {
            dispatch(clearErrors());
        }

    }, [dispatch, isAuthenticated, error])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }



    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            open={open}
        >
            <Fade in={open}>
                <Box sx={style}>
            {loading
                ?   <Loader />
                :   <form onSubmit={submitHandler}>
                        <Typography variant='h4'>Se Connecter</Typography>
                        <StylesTextFieldForm
                            InputLabelProps={{
                                style: { color: '#fff' }
                            }}
                            inputProps={{
                                style: { color: "#FFF" }
                            }}
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ margin: "10px 0" }}
                            type="text"
                            value={email}
                        />
                        <StylesTextFieldForm
                            InputLabelProps={{
                                style: { color: '#fff' }
                            }}
                            inputProps={{
                                style: { color: "#FFF" }
                            }}
                            label="Mot de passe"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ margin: "10px 0" }}
                            type="password"
                            value={password}
                        />
                        <Button id="login_button" type="submit" class="neon-button">Se connecter</Button>
                        <div onClick={() => setConditionModalAuth(!conditionModalAuth)}>Nouvel Utilisateur ?</div>
                    </form>
            }
                </Box>
            </Fade>
        </Modal>
    )
}
