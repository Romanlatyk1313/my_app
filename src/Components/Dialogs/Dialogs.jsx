import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";







const Dialogs = (props) => {

let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d =>  <DialogItem id={d.id} key={d.id} name={d.name} />);
    let messagesElements = state.messages.map(m => <Messages id={m.id} key={m.id} message={m.message} /> );
     let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
 let body =e.target.value;
 props.updateNewMessageBody(body)


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
                    <div><textarea placeholder='SEND MESSAGE'
                                   onChange={onNewMessageChange}
                                   value={newMessageBody}></textarea></div>
                    <div><button onClick={ onSendMessageClick } >Send</button></div>
                </div>

            </div>

        </div>
    );
}





export default Dialogs;