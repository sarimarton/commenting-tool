import React, { useLayoutEffect, useRef, useState } from 'react'

interface CommentFormProps {
  onSubmit: (text: string) => void
}

export default function CommentForm(props: CommentFormProps) {
  // Focus the textarea when it appears
  const ref = useRef<HTMLTextAreaElement>(null)
  useLayoutEffect(() => {
    // We can assume that the textarea exists
    ref.current!.focus()
  }, [])

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
