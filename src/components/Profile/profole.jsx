import MyPosts from './MyPosts/MyPosts';
import s from './profole.module.css';
import ProfileInfo from './ProfoleInfo/ProfileInfo';

const Profiles = (props) => {
  return <div>
    <ProfileInfo />
    <MyPosts 
      postsData={props.profilePage.postsData}
      newPostText={props.profilePage.newPostText}
      addPost={props.addPost} 
      updateNewPostText={props.updateNewPostText}/>
  </div>
}

export default Profiles;
