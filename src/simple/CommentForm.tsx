import React, { useState } from 'react'

interface CommentFormProps {
  onSubmit: (text: string) => void
}

export default function CommentForm(props: CommentFormProps) {
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleClick = () => {
    props.onSubmit(text)
    setText('')
  }

  return (
    <>
      <textarea value={text} onChange={handleChange}></textarea>
      <br />
      <button onClick={handleClick}>Add Comment</button>
    </>
  )
}
