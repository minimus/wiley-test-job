import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InputForm from './components/InputForm'
import ToDoList from './components/ToDoList'
import { TODO_LIST_LOAD } from './reducer/actions'

export default function App() {
  const list = useSelector(state => state.list)
  const dispatch = useDispatch()

  useEffect(() => {
    if (list === null) {
      dispatch({ type: TODO_LIST_LOAD })
    }
  }, [list, dispatch])

  return (
    <article id="main" className="main">
      <InputForm />
      <ToDoList />
    </article>
  )
}
