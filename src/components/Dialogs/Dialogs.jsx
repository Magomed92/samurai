import React from 'react';
import { DialogItem } from './DIalogItems/DialogItems';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/State';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';

export const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElement = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = state.messages.map((m) => <Message message={m.message} id={m.id} />);
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
