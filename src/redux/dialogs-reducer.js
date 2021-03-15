

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push( {id: 6 , message: body})
            return state;
        default:
            return state;
    }
        }
export const sendMessageCreator = () =>({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;