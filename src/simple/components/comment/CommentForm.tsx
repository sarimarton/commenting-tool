import React, { useState } from 'react'
import { useFocusedRef } from 'src/simple/util'

interface CommentFormProps {
  onSubmit: (text: string) => void
}

export default function CommentForm(props: CommentFormProps) {
  // Focus the textarea when it appears
  const ref = useFocusedRef<HTMLTextAreaElement>()

  const [value, setValue] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  const onClick = () => {
    if (value !== '') {
      props.onSubmit(value)
      setValue('')
    }
  }

  return (
    <div className="py-2">
      <textarea
        {...{ ref, value, onChange }}
        className="inline-block border p-2 w-full"
      ></textarea>
      <button onClick={onClick} className="text-blue-500">
        Add Comment
      </button>
    </div>
  )
}
