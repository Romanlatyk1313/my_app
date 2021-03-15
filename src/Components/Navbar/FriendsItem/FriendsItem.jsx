import React from 'react';
import s from './FriendsItem.module.css'
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {

    return(
        <div>
            <div  className={s.image}>
                <img src ='https://i.pinimg.com/originals/5b/05/2a/5b052a436717dc740909e83a4dbe9e5f.png'/>
                {props.name}
            </div>
        </div>


        )

}


export default FriendsItem;