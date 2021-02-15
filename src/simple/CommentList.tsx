import React from 'react'
import Comment from './Comment'
import type { Comment as TComment } from './types'

interface CommentListProps {
  comments: TComment[]
}

export default function CommentList(props: CommentListProps) {
  return (
    <ul>
      {props.comments.map((comment) => (
        <li>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  )
}
