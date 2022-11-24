import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import pokeLogo from '../img/pokelogo.png'
import wallpaper from '../img/wallpaper.jpg'
import pokedex from '../img/pokedex.png'
import pokeball from '../img/pokeball.png'

const UserLogin = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const dispach = useDispatch();

    const enterUser = () => {
        dispach(changeName(userName));
        navigate("/pokedex")
    }

    console.log(userName)
    return (
        <div className="App">
            <div className='login'>
                <div className="wallpaper">
                    <img src={wallpaper} className="pokewallpaper" alt="Vite logo" />
                </div>
                <div className="login-form">

                    <img src={pokeLogo} className="pokelogo" alt="Vite logo" />
                    <img src={pokedex} className="pokedex" alt="Vite logo" />
                    <img src={pokeball} className="logo pokeball " alt="Vite logo" />

                    <div className='input-name'>
                        <h1>Hello trainer! </h1>
                        <p>Give me you name to start</p>
                        <input className='login-input' type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                        <div className='button-next'>
                            <button className='login-button' onClick={enterUser}><i className="fa-solid fa-paper-plane"></i></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;