import type { Middleware } from 'src/redux/util'
import type { Store, Event } from './store'
import { v4 as uuidv4 } from 'uuid'

const middleware: Middleware<Store, Event> = (api) => (next) => (event) => {

  // We generate a unique id here. Async logic could come here too...
  if (event.type === 'comments/ADD_COMMENT_REQUEST') {
    const uuid = uuidv4()
    api.dispatch({
      type: 'comments/ADD_COMMENT_RESPONSE',
      comment: { children: [], text: event.text, id: uuid },
      parentId: event.parentId
    })
  }

  return next(event)
}

export default middleware
