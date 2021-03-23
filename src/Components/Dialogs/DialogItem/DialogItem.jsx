import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return(
<div className={s.item}>
    <img src='https://www.meme-arsenal.com/memes/8a7bae218bc400e984a2ed08e076039a.jpg' alt='' />
    <NavLink to={path} activeClassName={s.active} > {props.name} </NavLink>
</div>

    )
}



export default DialogItem;