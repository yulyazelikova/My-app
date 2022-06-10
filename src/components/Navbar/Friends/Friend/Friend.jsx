import s from './Friend.module.css';

const Friend = (props) => {
  return (
    <div>
      <div className={s.friendAva}>
        <img src={props.url} alt={props.name} />
      </div>
      <div className={s.FriendsName}>
        {props.name}
      </div>
    </div>
  )
}

export default Friend