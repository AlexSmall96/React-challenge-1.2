import React, { Component } from 'react'
import css from './css/Content.module.css';
import {savedPosts} from '../posts.json'
import PostItem from './PostItem';
import Loader from './Loader'

export default class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded:false,
       posts: [],
       name: ''
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
    this.setState({
      posts:savedPosts
    })
    this.getData()
  }

  handleChange = (event) => {
      let name=event.target.value
      const filteredPosts = savedPosts.filter(post => post.name === name)
      this.setState({
        posts:filteredPosts,
        name:name
      })
  }

  render() {  
    return (
      <div>
        <div className={css.TitleBar}>
          My Photos
          <form>
            <label>Search:</label>
            <input onChange={this.handleChange} type="search" id="searchInput" value={this.name} />          
          </form>
          <h4>posts found: {this.state.posts.length}</h4>
          
          </div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ? (
              <PostItem posts={this.state.posts} />
            ) : (
              <Loader />
            )
          }
        </div>
      </div>
    )
  }
}
