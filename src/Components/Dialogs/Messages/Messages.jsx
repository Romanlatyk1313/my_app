import React from "react";
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";




const Messages = (props) => {
    let path = '/dialogs/' + props.id;
    return(
        <div className={s.message}>

            <NavLink to={path} activeClassName={s.active} > {props.message} </NavLink>


        </div>
        )
}





export default Messages;