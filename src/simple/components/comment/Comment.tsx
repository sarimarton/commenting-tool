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
    // 'animate-splash' is a bit of a cheat here; I'm just making use of the
    // fact that we start with an empty page, and due to a proper
    // react reconciliation, already displayed comments won't rerender.
    // Otherwise a proper solution would be something like flagging the newly
    // added object above in handleSubmit (and clearing the rest). I just
    // wanted to keep things simple in this simple version. It's properly
    // managed in the redux version.
    <div className="pt-2 pb-2 animate-splash">
      <div>{props.comment.text}</div>
      <button onClick={handleReply} className="text-blue-500">
        Reply
      </button>
      {replyVisible && (
        <div className="bg-blue-100 pt-1 px-2">
          <CommentForm onSubmit={handleSubmit} />
        </div>
      )}
      <div className="border-l-2 pl-4">
        <CommentList comments={comments} />
      </div>
    </div>
  )
}
