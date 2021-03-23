import React from 'react';
import styles from './users.module.css'

import usersPhoto from '../../assets/users.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i<= pagesCount; i++){
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return(
                        <span className={props.currentPage ===p && styles.selectedPage  }
                              onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                    )

                })}

            </div>
            {
               props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+ u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto }
                                 className={styles.userPhoto} />
                        </NavLink>

                    </div>
                     <div>
                         {u.followed
                             ? <button onClick={ () => {
                                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                     withCredentials: true,
                                     headers:{
                                         "API-KEY": "7f08ca7c-2d43-4bd1-a73a-b30477ffef33"
                                     }
                                 })
                                     .then(response => {
                                         if (response.date.resultCode == 0 ){
                                             props.unfollow(u.id);
                                         }
                                     });

                             } } >Unfollow</button>


                             : <button onClick={ () => {
                                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                     withCredentials: true,
                                     headers:{
                                         "API-KEY": "7f08ca7c-2d43-4bd1-a73a-b30477ffef33"
                                     }
                                 })
                                     .then(response => {
                                       if (response.date.resultCode == 0 ){
                                           props.follow(u.id);
                                       }
                                     });


                             } }>Follow</button> }
                    </div>
                </span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        {/*<div>{u.location.country}</div>*/}
                            {/*         <div>{u.location.city}</div>*/}
                    </span>
                    </div>
                )
            }
        </div>
    )
}



export default Users;