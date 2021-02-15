import React from 'react'
import SimpleCommentingTool from './simple/SimpleCommentingTool'

function App() {
  return (
    <>
      <h1>Commenting Tool</h1>
      <div>
        <h2>Simple version (recursive local state)</h2>
        <hr />
        <SimpleCommentingTool />
      </div>
    </>
  )
}

export default App
