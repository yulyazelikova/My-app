import P from './Post.module.css';

const Post = (props) => {
  return (
    <div className={P.item}>
      <img src='https://uprostim.com/wp-content/uploads/2021/05/image020-4.jpg' />
      {props.message}
      <div>
        <span>LIKE {props.likeCount}</span>
      </div>
    </div>
  )
}

export default Post;
