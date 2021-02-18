import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import type { CommentId } from 'src/redux/store/slices/comments'
import { useDispatch, useSelector } from 'src/redux/store/store'

interface CommentProps {
  commentId: CommentId
}

export default function Comment(props: CommentProps) {
  const dispatch = useDispatch()
  const comment = useSelector(
    (state) => state.comments.commentMap[props.commentId]
  )
  const splash = useSelector(
    (state) => state.comments.splashingComment === comment.id
  )

  const toggleReply = () => {
    dispatch({
      type: 'comments/SET_REPLY_VISIBILITY',
      commentId: comment.id,
      visible: !comment.replyVisible
    })
  }

  return (
    <div className={`pt-2 pb-2 ${splash ? 'animate-splash' : ''}`}>
      <div>{comment.text}</div>
      <button onClick={toggleReply} className="text-blue-500">
        Reply
      </button>
      {comment.replyVisible && (
        <div className="bg-blue-100 pt-1 px-2">
          <CommentForm parentId={comment.id} />
        </div>
      )}
      <div className="border-l-2 pl-4">
        <CommentList commentIds={comment.children} />
      </div>
    </div>
  )
}
