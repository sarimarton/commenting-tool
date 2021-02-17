import React from 'react'
import SimpleCommentingTool from './simple/SimpleCommentingTool'
import './index.css'

function App() {
  return (
    <div>
      <h1 className="text-2xl p-4 bg-blue-400 text-white">Commenting Tool</h1>
      <div className="grid grid-cols-2 gap-8 p-4">
        <div>
          <h2 className="text-xl mb-2">
            Simple version (recursive local state)
          </h2>
          <SimpleCommentingTool />
        </div>
        <div>{ /* placeholder, maybe for a Redux version? */ }</div>
      </div>
    </div>
  )
}

export default App
