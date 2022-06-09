import MyPosts from './MyPosts/MyPosts';
import s from './profole.module.css';
import ProfileInfo from './ProfoleInfo/ProfileInfo';

const Profiles = (props) => {
  console.log(props.postsData)
  return <div>
    <ProfileInfo />
    <MyPosts postsData={props.postsData}/>
  </div>
}

export default Profiles;
