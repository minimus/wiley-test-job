import React from 'react'
import { useSelector } from 'react-redux'
import ToDoListItem from './ToDoListItem'
// import { TODO_LIST_ITEM_COMPLETE } from '../reducer/actions'

const ToDoList = () => {
  const list = useSelector(state => state.list || [])

  return (
    <section className="todo-list">
      <h1>TODO List</h1>
      {(list.length)
        ? list.map(item => (
          <ToDoListItem
            key={item.idx.toString()}
            task={item.task}
            title={item.title}
            completed={item.completed}
            idx={item.idx}
          />
        ))
        : <p>No data to display...</p>}
    </section>
  )
}

export default ToDoList
