import React from 'react'
import { useDispatch } from 'react-redux'
import propTypes from 'prop-types'
import classNames from 'classnames'
import {
  TODO_LIST_ITEM_COMPLETE,
  TODO_LIST_ITEM_DELETE,
  TODO_LIST_ITEM_EDIT,
} from '../reducer/actions'

const ToDoListItem = ({
  idx, title, task, completed,
}) => {
  const icon = (completed) ? 'done' : 'alarm'
  const stateClass = (completed) ? 'item-completed' : 'item-not-completed'

  const dispatch = useDispatch()

  const shortenString = (str, len) => {
    if (str.length <= len) return str
    const out = str.slice(0, len + 1)
    const lastIdx = out.lastIndexOf(' ')
    return `${(lastIdx === -1) ? out : out.slice(0, lastIdx)}...`
  }

  return (
    <div id={`tli-${idx}`} className={classNames('todo-list__item', stateClass)}>
      <i className={classNames('material-icons md-48', 'todo-list__item__icon', stateClass)}>{icon}</i>
      <h4 className="todo-list__item__title">{title}</h4>
      <p className="todo-list__item__task">{shortenString(task, 170)}</p>
      <div className="todo-list__item__toolbar">
        <button
          type="button"
          className="todo-list__item__toolbar__button"
          title={(completed) ? 'Cancel task completion' : 'Set task as completed'}
          onClick={() => dispatch({ type: TODO_LIST_ITEM_COMPLETE, payload: idx })}
        >
          <i className="material-icons md-18">done</i>
        </button>
        <button
          type="button"
          className="todo-list__item__toolbar__button"
          title="Remove task"
          onClick={() => dispatch({ type: TODO_LIST_ITEM_DELETE, payload: idx })}
        >
          <i className="material-icons md-18" role="button">delete_sweep</i>
        </button>
        {!completed && (
          <button
            type="button"
            className="todo-list__item__toolbar__button"
            title="Edit task"
            onClick={() => dispatch({ type: TODO_LIST_ITEM_EDIT, payload: idx })}
          >
            <i className="material-icons md-18">create</i>
          </button>
        )}
      </div>
    </div>
  )
}

ToDoListItem.propTypes = {
  idx: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  task: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
}

export default ToDoListItem
