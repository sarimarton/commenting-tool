import React from 'react'
import Comment from './Comment'
import type { Comment as TComment } from './types'

interface CommentListProps {
  comments: TComment[]
}

export default function CommentList(props: CommentListProps) {
  return (
    <ul>
      {props.comments.map((comment, idx) => (
        // For simplicity, idx will do it for now...
        <li key={idx}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  )
}
