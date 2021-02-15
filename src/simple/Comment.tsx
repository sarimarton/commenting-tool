import React, { useState } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import type { Comment } from './types'

interface CommentProps {
  comment: Comment
}

export default function Comment(props: CommentProps) {
  const [comments, setComments] = useState<Comment[]>([])

  const [replyVisible, setReplyVisible] = useState(false)

  const handleReply = () => {
    setReplyVisible(!replyVisible)
  }

  const handleSubmit = (text: string) => {
    setComments([...comments, { text, comments: [] }])
    setReplyVisible(false)
  }

  return (
    <div>
      <div>{props.comment.text}</div>
      <a onClick={handleReply}>Reply</a>
      <br />
      {replyVisible && <CommentForm onSubmit={handleSubmit} />}
      <CommentList comments={comments} />
    </div>
  )
}
