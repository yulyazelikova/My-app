import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Massage = (props) => {
  return <div className={s.massge}>{props.massage}</div>
}

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

let massage = [
  { id: 1, massage: 'Will be peace' },
  { id: 2, massage: 'Hi' },
  { id: 3, massage: 'Bay' },
  { id: 4, massage: 'How are you?' },
]

let massagesElimints = massage.map((el) => {
  return <Massage massage={el.massage} />
})

const Dialogs = (props) => {
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