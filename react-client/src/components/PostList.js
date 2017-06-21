import React, { Component } from 'react'
import '../css/post-list.css'
import axios from 'axios'
import Settings from '../settings'

import {
  Link
} from 'react-router-dom'


class PostList extends Component {

  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    axios.get(`${Settings.host}/posts`).then(
      res => {
        console.log(res.data)
        this.setState({
          posts: res.data.posts
        })
      }
    )
  }

  filterPostList = (id) => {
    let posts = this.state.posts.filter(post => post._id !== id)
    this.setState({
      posts
    })
  }

  removeServerData = (id) => {
    axios.delete(`${Settings.host}/post/${id}`).then(
      res => {
        console.log(res.data)
        this.filterPostList(id)
      }
    )
  }

  handleDelete = (id) => {
    console.log(id)
    this.removeServerData(id)
  }

  render() {
    const postList = this.state.posts.map( post => (
           <div key={post._id} className="card">
             <div className="title">{post.title}</div>
             <div className="actions">
               <Link className="link" to={`/post/${post._id}`}>查看</Link>
               <Link className="link" to={`/post/${post._id}/edit`}>编辑</Link>
               <Link to='' className="link" onClick={() => this.handleDelete(post._id)}>删除</Link>
             </div>
           </div>
         ))
    return (
      <div className="post-list">
        <Link className="button" to="/post/new">写文章</Link>
        { postList }
      </div>
    )
  }
}

export default PostList
