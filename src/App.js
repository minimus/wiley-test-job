import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import InputForm from './components/InputForm'
import { TODO_LIST_LOAD, TODO_LIST_SAVE } from './reducer/actions'

export default function App() {
  const list = useSelector(state => state.list, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if (list === null) {
      dispatch({ type: TODO_LIST_LOAD })
    }

    return () => {
      dispatch({ type: TODO_LIST_SAVE, payload: list })
    }
  }, [list, dispatch])

  return (
    <article id="main" className="main">
      <InputForm />
    </article>
  )
}
