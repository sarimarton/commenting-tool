import React from 'react'
import { useSelector } from 'src/redux/store/store'

import CommentForm from './components/comment/CommentForm'
import CommentList from './components/comment/CommentList'

export default function CommentToolRedux() {
  const commentIds = useSelector(state => state.comments.rootComments)

  return (
    <>
      <CommentForm parentId={null} />
      <CommentList commentIds={commentIds} />
    </>
  )
}
