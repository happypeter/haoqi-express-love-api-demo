import React from 'react'

import {
  Link
} from 'react-router-dom'

const PostList = () => (
  <div>
    <Link to="/post/new">写文章</Link>
    <div>
      PostList
    </div>
  </div>
)

export default PostList
