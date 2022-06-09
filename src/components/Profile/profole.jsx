import MyPosts from './MyPosts/MyPosts';
import s from './profole.module.css';
import ProfileInfo from './ProfoleInfo/ProfileInfo';

const Profiles = (props) => {

    let postsData = [
    { id: 1, message: 'Hello', likeCount: 800 },
    { id: 2, message: 'You are luckiest', likeCount: 5 },
    { id: 3, message: 'You are beautifu', likeCount: 88 },
  ]


  return <div>
    <ProfileInfo />
    <MyPosts postsData={postsData}/>
  </div>
}

export default Profiles;
