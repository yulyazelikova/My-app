
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Massage from './Message/Message';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {

  let doalogsElements = props.dialogsData.map((el) => {
    return <DialogItem id={el.id} name={el.name} />
  })


  let massagesElimints = props.massage.map((el) => {
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