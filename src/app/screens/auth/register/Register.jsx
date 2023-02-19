import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Modal, Fade, Typography, Button } from '@mui/material';

// STYLES
import "../../../components/layouts/design/auth/StyledBtnAuth.css"
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../../utils/redux/actions/AuthActions'


const style = {
    bgcolor: 'rgba(0, 0, 0, 0.8)',
    border: '2px solid #000',
    borderRadius: "20px",      
    boxShadow: 24,
    color: "#FFF",
    left: '50%',
    height: 500,
    padding: "50px", 
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
};

export default function Register({ conditionModalAuth, setConditionModalAuth, open }) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')

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

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData))
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
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
                    <form onSubmit={submitHandler} encType='multipart/form-data'>
                        <div style={{ alignItems: "center", color: "FFF", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Typography variant='h3'>S'Inscrire</Typography>

                            <div>
                                <label>Nom</label>
                                <input
                                    type="name"
                                    name='name'
                                    value={name}
                                    onChange={onChange}
                                />
                            </div>

                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>

                            <div>
                                <label>Mot de passe</label>
                                <input
                                    type="password"
                                    name='password'
                                    value={password}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='avatar_upload'>Avatar</label>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <figure className='avatar mr-3 item-rtl'>
                                            <img
                                                src={avatarPreview}
                                                alt='Avatar Preview'
                                                style={{ borderRadius: "50%", height: "50px", width: "50px" }}
                                            />
                                        </figure>
                                    </div>
                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='avatar'
                                            id='customFile'
                                            accept="iamges/*"
                                            style={{ height: "50px", width: "50px" }}
                                            onChange={onChange}
                                        />
                                        <label htmlFor='customFile'>
                                            Choisir Avatar
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button
                                id="register_button"
                                type="submit"
                                className="btn btn-block py-3"
                                disabled={loading ? true : false}
                            >
                                Enregistrez
                            </button>
                        </div>
                    </form>
                </Box>
            </Fade>
        </Modal>
    )
}
