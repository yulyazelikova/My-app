import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
  let friendsElements = props.friendsDate.map(el => <Friend name={el.name} url={el.url} />)

  return (<div className={s.wraperFriends}>
        <h3>FRIENDS</h3>
        <div className={s.container}>
        {friendsElements}
    </div>
  </div>

  )
}

export default Friends