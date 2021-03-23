import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return( 
      <div className={s.item}>
          <img src='https://i.pinimg.com/originals/56/38/e8/5638e84e50f5564fdfecec3c51ab7b7c.jpg' alt='www'/>
          { props.message }
          <div>
             <span> lake { props.likesCount }</span>
          </div>
      </div>
     
    )
}

export default Post;