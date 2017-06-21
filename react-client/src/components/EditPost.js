import React, { Component } from 'react'
import Form from './Form'
import Settings from '../settings'
import axios from 'axios'

class EditPost extends Component {
  constructor() {
    super()
    this.state = {
      post: {}
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    axios.get(`${Settings.host}/post/${id}`).then(
      res => {
        this.setState({
          post: res.data.post
        })
      }
    )
  }

  updatePost = (data) => {
    console.log(data)
    const { id } = this.props.match.params
    axios.put(`${Settings.host}/post/${id}`, data).then(
      res => {
        console.log(res.data)
        this.props.history.push('/')
      }
    )
  }
  
  render() {
    const { post } = this.state
    return(
      <div>
        { Object.keys(post).length !== 0 ? <Form label="更新文章" post={post} publishPost={this.updatePost}/> : ''}
      </div>
    )
  }
}

export default EditPost
