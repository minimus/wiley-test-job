import React, { useReducer, useEffect } from 'react'
import InputForm from './components/InputForm'
import reducer, { initialState } from './reducer/reducer'
import { TODO_LIST_LOAD, TODO_LIST_SAVE } from './reducer/actions'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.list === null) {
      dispatch({ type: TODO_LIST_LOAD })
    }

    return () => {
      dispatch({ type: TODO_LIST_SAVE, payload: state.list })
    }
  }, [state.list])

  return (
    <article id="main" className="main">
      <InputForm />
    </article>
  )
}
