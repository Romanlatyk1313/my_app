import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import FriendsItem from "./FriendsItem/FriendsItem";


class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.nameElements = this.props.nameNavbar.map(n => <FriendsItem id={n.id} key={n.id} name={n.name}/>)
    }
    render() {
        return(
           <Navbar
               nameElements={this.nameElements}
           />
        );
    }
}


 const mapStateToProps = (state) => {
     return{

         nameNavbar: state.siteBarePage.nameNavbar
     }
 }
const mapDispatchToProps = (dispatch) => {
     return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
