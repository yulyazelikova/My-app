import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  // let postsData = [
  //   { id: 1, message: 'Hello', likeCount: 800 },
  //   { id: 2, message: 'You are luckiest', likeCount: 5 },
  //   { id: 3, message: 'You are beautifu', likeCount: 88 },
  // ]

  let postsElements = props.postsData.map(el => {
    return <Post message={el.message} likeCount={el.likeCount} />
  })

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
