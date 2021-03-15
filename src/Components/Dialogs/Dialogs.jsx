import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";





const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d =>  <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.messages.map(m => <Messages id={m.id} message={m.message} /> );
     let newMessageBody = state.newMessageBody;

debugger
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
 let body = e.target.value;
 props.updateNewMessageBodyCreator(body)


    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div>
                   {messagesElements}
               </div> 
                <div>
                    <div><textarea placeholder='SEND MESSAGE'  onChange={onNewMessageChange} value={newMessageBody}></textarea></div>
                    <div><button onClick={ onSendMessageClick } >Send</button></div>
                </div>

            </div>

        </div>
    );
}





export default Dialogs;