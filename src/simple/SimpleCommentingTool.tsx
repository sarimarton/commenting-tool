import React, { useState } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import type { Comment } from './types'

export default function SimpleCommentTool() {
  const [comments, setComments] = useState<Comment[]>([])

  const handleSubmit = (text: string) => {
    setComments([...comments, { text, comments: [] }])
  }

  return (
    <>
      <CommentForm onSubmit={handleSubmit} />
      <CommentList comments={comments} />
    </>
  )
}
