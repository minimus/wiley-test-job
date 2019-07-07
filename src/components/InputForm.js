import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  TODO_LIST_ITEM_TITLE_CHANGED, TODO_LIST_ITEM_TASK_CHANGED,
} from '../reducer/actions'
import InputFormButtons from './InputFormButtons'

const InputForm = () => {
  const title = useSelector(state => state.title)
  const task = useSelector(state => state.task)

  const dispatch = useDispatch()

  return (
    <section className="input-form">
      <div className="input-form__holder form-group">
        <label htmlFor="input-form__title">
        Title
          <input
            className="input-form__title input-form__input form-control"
            type="text"
            value={title}
            placeholder="Set title for todo task here..."
            onChange={event => dispatch({
              type: TODO_LIST_ITEM_TITLE_CHANGED,
              payload: event.target.value,
            })}
          />
        </label>
      </div>
      <div className="input-form__holder form-group">
        <label htmlFor="input-form__job">
        Task
          <textarea
            className="input-form__job input-form__input form-control"
            value={task}
            rows={5}
            placeholder="Add todo task here..."
            onChange={event => dispatch({
              type: TODO_LIST_ITEM_TASK_CHANGED,
              payload: event.target.value,
            })}
          />
        </label>
      </div>
      <InputFormButtons />
    </section>
  )
}

export default InputForm
