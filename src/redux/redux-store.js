import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import siteBareReducer from "./siteBare-reducer";

const {createStore} = require("redux");

let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBarePage: siteBareReducer
})

let store = createStore(reducers);

export default store;