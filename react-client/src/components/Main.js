import React, { Component } from 'react'
import PostList from './PostList'
import NewPost from './NewPost'
import ShowPost from './ShowPost'
import EditPost from './EditPost'

import {
  Route,
  Switch
} from 'react-router-dom'

class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/post/new" component={NewPost} />
        <Route path="/post/:id/edit" component={EditPost} />
        <Route path="/post/:id" component={ShowPost} />
      </Switch>
    )
  }
}

export default Main
