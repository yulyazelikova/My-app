import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <div className={s.dialogAva}><img src={props.url} alt="" /></div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;