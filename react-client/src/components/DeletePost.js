import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'
import Settings from '../settings'
import '../css/delete-post.css'



class DeletePost extends Component {

  state = {
    open: false
  }

  open = () => {
    this.setState({
      open: true
    })
  }

  close = () => {
    this.setState({
      open: false
    })
  }

  delete = () => {
    axios.delete(`${Settings.host}/post/${this.props.id}`).then(
      res => {
        console.log(res.data)
        this.close()
        this.props.filterPostList(this.props.id)
      }
    )
  }

  render() {
    return(
      <div className="delete-post" style={{ 'display': this.state.open ? 'block' : 'none'}}>
        <div className="dialog">
          确认删除吗？
          <div className="actions">
            <Link className="action" to="" onClick={this.delete}>确定</Link>
            <Link className="action" to="" onClick={this.close}>取消</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default DeletePost
