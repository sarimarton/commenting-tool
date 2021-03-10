import React, { useState } from 'react'
import { useFocusedRef } from 'src/redux/util'
import type { CommentId } from 'src/redux/store/slices/comments'
import { useDispatch } from 'src/redux/store/store'

interface CommentFormProps {
  parentId: CommentId | null
}

export default function CommentForm(props: CommentFormProps) {
  // Focus the textarea when it appears
  const ref = useFocusedRef<HTMLTextAreaElement>()

  // This is the only place where I use local state, but I actually tend to
  // like the idea of bringing _everything_ to the redux store, thus stripping
  // away logic from the components. I know that this is a disputable position,
  // but IMO it opens up great benefits.
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const onClick = () => {
    if (text !== '') {
      dispatch({
        type: 'comments/ADD_COMMENT_REQUEST',
        parentId: props.parentId,
        text
      })

      setText('')
    }
  }

  return (
    <div className="py-2">
      <textarea
        {...{ ref, value: text, onChange }}
        className="inline-block border p-2 w-full"
      ></textarea>
      <button onClick={onClick} className="text-blue-500">
        Add Comment
      </button>
    </div>
  )
}
