import React from 'react'
import CommentingToolSimple from './simple/CommentingToolSimple'
import CommentingToolRedux from './redux/CommentingToolRedux'
import store from 'src/redux/store/store'
import { Provider } from 'react-redux'

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
          <CommentingToolSimple />
        </div>
        <div>
          <h2 className="text-xl mb-2">
            Redux version (flat orthogonal state)
          </h2>
          <Provider store={store}>
            <CommentingToolRedux />
          </Provider>
        </div>
      </div>
    </div>
  )
}

export default App
