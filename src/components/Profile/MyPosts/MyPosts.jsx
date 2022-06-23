import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map(el => {
    return <Post message={el.message} likeCount={el.likeCount} />
  })

  let newPostRlement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostRlement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <div>
          <textarea ref={newPostRlement}
            onChange={onPostChange}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Send</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
