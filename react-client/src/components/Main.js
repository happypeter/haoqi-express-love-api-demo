import React, { Component } from 'react'
import PostList from './PostList'
import NewPost from './NewPost'

import {
  Route
} from 'react-router-dom'

class Main extends Component {
  render() {
    return(
      <div>
        <Route exact path='/' component={PostList} />
        <Route path='/post/new' component={NewPost} />
      </div>
    )
  }
}

export default Main
