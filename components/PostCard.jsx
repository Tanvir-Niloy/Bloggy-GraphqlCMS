import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
        <h4>{post.title}</h4>
        <h4>{post.excerpt}</h4>
    </div>
  )
}

export default PostCard