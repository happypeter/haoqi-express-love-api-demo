import React from 'react'
import '../css/post-list.css'

import {
  Link
} from 'react-router-dom'

const PostList = () => (
  <div className="post-list">
    <Link className="button" to="/post/new">写文章</Link>
    <div>
      PostList
    </div>
  </div>
)

export default PostList
