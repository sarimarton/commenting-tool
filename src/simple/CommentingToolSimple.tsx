import React, { useState } from 'react'
import CommentForm from './components/comment/CommentForm'
import CommentList from './components/comment/CommentList'
import type { Comment } from './components/comment/types'

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
