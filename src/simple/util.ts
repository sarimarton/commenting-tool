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

