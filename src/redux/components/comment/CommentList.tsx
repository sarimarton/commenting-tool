import React from 'react'
import Comment from './Comment'
import type { CommentId } from 'src/redux/store/slices/comments'

interface CommentListProps {
  commentIds: CommentId[]
}

export default function CommentList(props: CommentListProps) {
  return (
    <ul>
      {props.commentIds.map((commentId) => (
        <li key={commentId}>
          <Comment commentId={commentId} />
        </li>
      ))}
    </ul>
  )
}
