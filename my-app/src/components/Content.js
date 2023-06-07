import React, { Component } from 'react'
import css from './css/Content.module.css';
import {savedPosts} from '../posts.json'
import PostItem from './PostItem';
import Loader from './Loader'

export default class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded:false
    }
  }
  
  getData(){
    setTimeout(() => {
      this.setState({
        isLoaded:true
      })
    }, 3000)
  }
  componentDidMount(){
    this.getData()
  }
  render() {  
    return (
      <div>
        <div className={css.TitleBar}>My Photos</div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ? (
              <PostItem posts={savedPosts} />
            ) : (
              <Loader />
            )
          }
            
        </div>
      </div>
    )
  }
}
