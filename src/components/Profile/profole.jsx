import MyPosts from './MyPosts/MyPosts';
import s from './profole.module.css';
import ProfileInfo from './ProfoleInfo/ProfileInfo';

const Profiles = (props) => {
  return <div>
    <ProfileInfo />
    <MyPosts postsData={props.profilePage.postsData}/>
  </div>
}

export default Profiles;
