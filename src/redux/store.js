import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import siteBareReducer from "./siteBare-reducer";


let store = {
   _collSubscrider (){
        console.log('State chenge');
    },
    _state: {

        profilePage: {
            posts:
                [
                    {id: 1, message: 'Hi, how are you', likesCount:'20' },
                    {id:2, message: 'It`s my first post ', likesCount:'50' }
                ],
            newPostText: 'to go Text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1 , name: 'Roma'},
                {id: 2 , name: 'Dima'},
                {id: 3 , name: 'Andrey'},
                {id: 4 , name: 'Mesha'},
                {id: 5 , name: 'Vova'},
                {id: 6 , name: 'Sasha'}
            ],
            messages:  [
                {id: 0 , message: 'Hello'},
                {id: 1 , message: 'Do you know React'},
                {id: 2 , message: 'YO'},
                {id: 3 , message: 'Hello'},
                {id: 4 , message: 'Hello'},
                {id: 5 , message: 'Hello'}
            ],

            newMessageBody: ''

        },
        siteBarePage:{
            nameNavbar: [
                { name: 'Roma', id: 1 },
                { name: 'Vova', id: 2 },
                { name: 'Dima', id: 3 }

            ]
        }

    },

    getState (){
       return this._state
    },
    subscribe (observe)  {
        this._collSubscrider = observe;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBarePage = siteBareReducer(this._state.siteBarePage , action);

        this._collSubscrider(this._state);



    }


}



export default store;