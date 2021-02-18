import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import type { Dispatch } from 'react'
import * as reactRedux from 'react-redux'
import commentsReducer, {
  CommentsSlice,
  CommentsEvent
} from './slices/comments'
import effectsMiddleware from './effects'

// This is usually a union of slice events
export type CommentingToolStoreEvent = CommentsEvent

// ...and this is a collection of the slices
export interface CommentingToolStore {
  comments: CommentsSlice
}

// Typed hooks to get typed selector results...
export const useSelector: reactRedux.TypedUseSelectorHook<CommentingToolStore> =
  reactRedux.useSelector

// ...and only accept valid event dispatches
export const useDispatch = () =>
  reactRedux.useDispatch<Dispatch<CommentsEvent>>()

// Export generic names for the middleware consumption
export type Store = CommentingToolStore
export type Event = CommentingToolStoreEvent

export default createStore<Store, Event, {}, {}>(
  combineReducers({ comments: commentsReducer }),
  composeWithDevTools(applyMiddleware(effectsMiddleware))
)
