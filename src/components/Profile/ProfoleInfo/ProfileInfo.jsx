import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://images6.alphacoders.com/710/710073.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;