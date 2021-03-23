import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";





const DialogsContainer = (props) => {

    let dialogsElements = props.dialogs.map(d =>  <DialogItem id={d.id} name={d.name} />);
    let messagesElements = props.messages.map(m => <Messages id={m.id} message={m.message} /> );
     let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
 let body = e.target.value;
 props.updateNewMessageBodyCreator(body)


    }

    return (
       <Dialogs />
    );
}





export default DialogsContainer;