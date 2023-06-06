import React from 'react'
import css from './css/Content.module.css';

export default function PostItem(props){
  const posts = props.posts
  return (
    posts.map(post => {
        return(
            <div key={post.title} className={css.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt={post.description}/>
            </div>
        )
    })
  )
}
