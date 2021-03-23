import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";


class Navbar extends React.Component {
    constructor(props) {
        super(props);
       this.nameElements = this.props.nameNavbar.map(n => <FriendsItem id={n.id} key={n.id} name={n.name}/>)

    }


    render() {
        return(
            <nav className={s.nav}>
                <div className={s.item} >
                    <NavLink to='/profile' activeClassName={s.active}> Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item} >
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.friends}>
                    {this.nameElements}
                </div>


            </nav>
        );
    }
 }
 
      export default Navbar;