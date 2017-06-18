import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios'
import Settings from '../settings'

class NewPost extends Component{

  newPost = (data) => {
    axios.post(`${Settings.host}/post`, data).then(
      res => {
        console.log(res.data.msg)
        this.props.history.push('/')
      }
    )
  }

  render(){
    return(
      <div>
        <Form label="发布文章" publishPost={this.newPost}/>
      </div>
    )
  }
}

export default NewPost
