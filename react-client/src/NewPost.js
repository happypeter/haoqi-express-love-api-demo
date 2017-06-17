import React, { Component } from 'react'
import Form from './Form'
  
class NewPost extends Component{

  newPost = (content) => {
    console.log(content)
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
