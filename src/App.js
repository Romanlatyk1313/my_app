import React from 'react';
import './App.css';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import Friends from "./Components/Friends/Friends";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";



const App = (props) => {

  return (

          <div className='app-wrapper'>
              <HeaderContainer />
              <NavbarContainer  />
              <div className='app-wrapper-content'>
                  <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
                   <Route path='/dialogs' render={ () =>  <DialogsContainer  />} />
                  <Route path='/news' render={ () =>  <News />} />
                  <Route path='/music' render={ () => <Music /> } />
                  <Route path='/settings' render={ () => <Settings />} />
                  <Route path='/friends' render={ () => <Friends />} />

                  <Route path='/users' render={ () => <UsersContainer />} />
              </div>
          </div>
  )
}




export default App;
