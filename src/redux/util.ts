import { useLayoutEffect, useRef } from "react"

/**
 * Put focus automatically on the ref on render
 */
export function useFocusedRef<TElement extends HTMLElement>() {
  const ref = useRef<TElement>(null)

  useLayoutEffect(() => {
    ref.current?.focus()
  }, [ref.current])

  return ref
}

/**
 * Strong redux middleware typing. I couldn't find a usable one when I did
 * this. The one provided at https://redux.js.org/recipes/usage-with-typescript
 * is not strong.
 */
import type { Dispatch, AnyAction } from 'redux'

export interface MiddlewareAPI<S, E extends AnyAction> {
  dispatch: Dispatch<E>
  getState(): S
}

// prettier-ignore
export type Middleware<S, E extends AnyAction> =
  (api: MiddlewareAPI<S, E>) =>
  (next: Dispatch<E>) =>
  (event: E) => ReturnType<Dispatch<E>>
