// I decided to not use redux's createSlice, because I prefer plain event
// objects instead of 'action creators' due to their transparency. But I wanted
// to avoid the infamous wordiness of tradition reducers, so I used Immer directly
import produce from 'immer'

export type CommentId = string

export type Comment = {
  id: CommentId
  text: string
  children: CommentId[]
}

export type CommentsEvent =
  | {
      type: 'comments/SET_REPLY_VISIBILITY'
      commentId: string
      visible: boolean
    }
  | {
      type: 'comments/ADD_COMMENT_REQUEST'
      parentId: string | null
      text: string
    }
  | {
      type: 'comments/ADD_COMMENT_RESPONSE'
      parentId: string | null
      comment: Comment
    }

// The shape of the below slice is simple. Although, for async operations, I
// like to use more generic store shapes to bring them closer to state machines.
// E.g.:
// export type CommentsSlice = StateMachineLikeNode<
//   | { state: 'idle'; context: null }
//   | { state: 'loading'; context: Comments | null }
//   | { state: 'loaded'; context: Comments }
//   | { state: 'error'; context: Comments | null }
// >
// This helps keeping the component code library agnostic, and maintains a
// relatively easy refactorability to use more robust state machine libs like
// XState.
export type CommentsSlice = {
  rootComments: CommentId[]
  commentMap: Record<CommentId, Comment & { replyVisible: boolean }>
  splashingComment: CommentId | null
}

const initialState: CommentsSlice = {
  rootComments: [],
  commentMap: {},
  splashingComment: null
}

const commentsReducer = (
  state: CommentsSlice = initialState,
  event: CommentsEvent
) =>
  produce(state, (draft) => {
    switch (event.type) {
      case 'comments/SET_REPLY_VISIBILITY':
        draft.commentMap[event.commentId].replyVisible = event.visible
        return

      case 'comments/ADD_COMMENT_REQUEST':
        // server (middleware) catches this and returns with a response
        return

      case 'comments/ADD_COMMENT_RESPONSE':
        if (event.parentId) {
          draft.commentMap[event.parentId].children.push(event.comment.id)
          draft.commentMap[event.parentId].replyVisible = false
        } else {
          draft.rootComments.push(event.comment.id)
        }

        draft.commentMap[event.comment.id] = {
          ...event.comment,
          replyVisible: false
        }

        draft.splashingComment = event.comment.id

        return
    }
  })

export default commentsReducer
