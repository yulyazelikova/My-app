
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Massage from './Message/Message';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Dialogs = (props) => {

  let doalogsElements = props.dialogsPage.dialogsData.map((el) => {
    return <DialogItem id={el.id} name={el.name} url={el.url} />
  })

  let massagesElimints = props.dialogsPage.massage.map((el) => {
    return <Massage massage={el.massage} />
  })

  let newMassge = React.createRef();

  let addMassage = () => {
    props.addMassage();
  }

  let onMassageChange = () => {
    let text = newMassge.current.value;
    props.updateNewMassageText(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {doalogsElements}
      </div>
      <div className={s.massages}>
        {massagesElimints}
        <div>
          <textarea ref={newMassge}
            onChange={onMassageChange}
            value={props.dialogsPage.newMassage} />
          <button onClick={addMassage}>Send</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;