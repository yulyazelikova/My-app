
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Massage from './Message/Message';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {

  let massage = [
    { id: 1, massage: 'Will be peace' },
    { id: 2, massage: 'Hi' },
    { id: 3, massage: 'Bay' },
    { id: 4, massage: 'How are you?' },
  ]

  let dialogsData = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Tom' },
    { id: 3, name: 'Max' },
    { id: 4, name: 'Anton' },
    { id: 5, name: 'Mia' }
  ]

  let doalogsElements = dialogsData.map((el) => {
    return <DialogItem id={el.id} name={el.name} />
  })


  let massagesElimints = massage.map((el) => {
    return <Massage massage={el.massage} />
  })

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {doalogsElements}
      </div>
      <div className={s.massages}>
        {massagesElimints}
      </div>
    </div>
  )
};

export default Dialogs;