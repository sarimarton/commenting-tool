import React, { useState } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import type { Comment } from './types'

export default function SimpleCommentTool() {
  const [comments, setComments] = useState<Comment[]>([])

  return (
    <div>
      <CommentForm
        onSubmit={(text) => setComments([...comments, { text, comments: [] }])}
      />
      <CommentList comments={comments} />
    </div>
  )
}
