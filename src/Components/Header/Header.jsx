import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return(
        <header className={s.header}>
            <img src='https://www.kindpng.com/picc/m/195-1952977_3d-best-logo-maker-online-triangle-logo-design.png'/>

            <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
        </header>
    )
}

export default Header;