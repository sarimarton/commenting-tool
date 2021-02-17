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

  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleClick = () => {
    if (value !== '') {
      props.onSubmit(value)
      setValue('')
    }
  }

  return (
    <>
      <textarea ref={ref} value={text} onChange={handleChange}></textarea>
      <br />
      <button onClick={handleClick}>Add Comment</button>
    </>
  )
}
