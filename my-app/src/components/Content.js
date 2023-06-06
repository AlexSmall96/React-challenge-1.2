import React, { Component } from 'react'
import css from './css/Content.module.css';
import {savedPosts} from '../posts.json'
import PostItem from './PostItem';

export default class Content extends Component {
    // constructor(props) {
    //   super(props)
    // }
  render() {
    return (
      <div>
        <div className={css.TitleBar}>My Photos</div>
        <div className={css.SearchResults}>
            <PostItem posts={savedPosts} />
        </div>
      </div>
    )
  }
}
