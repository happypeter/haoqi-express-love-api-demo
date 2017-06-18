import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../settings'
import '../css/show-post.css'


class ShowPost extends Component {
  constructor() {
    super()
    this.state = {
      post: ''
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    axios.get(`${Settings.host}/post/${id}`).then(
      res => {
        console.log(res.data.post)
        this.setState({
          post: res.data.post
        })
      }
    )
  }
  render() {
    const { category, title, content } = this.state.post
    return(
      <div className="show-post">
        <div className="category">
          {category}
        </div>
        <div className="title">
          {title}
        </div>
        <div className="content">
          {content}
        </div>
      </div>
    )
  }
}

export default ShowPost
