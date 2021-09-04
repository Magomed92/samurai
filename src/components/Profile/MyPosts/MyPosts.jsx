import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/State';

export const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    //  let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
