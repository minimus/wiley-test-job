import React, { useReducer } from 'react'
import {
  TODO_LIST_ITEM_ADD, TODO_LIST_ITEM_CLEAR,
  TODO_LIST_ITEM_TITLE_CHANGED, TODO_LIST_ITEM_JOB_CHANGED,
} from '../reducer/actions'
import reducer, { initialState } from '../reducer/reducer'

const InputForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <section className="input-form">
      <label htmlFor="input-form__title">
        Title
        <input
          className="input-form__title input-form__input"
          type="text"
          value={state.title}
          placeholder="Set title for todo here..."
          onChange={event => dispatch({
            type: TODO_LIST_ITEM_TITLE_CHANGED,
            payload: event.target.value,
          })}
        />
      </label>
      <label htmlFor="input-form__job">
        Job
        <input
          className="input-form__job input-form__input"
          type="text"
          value={state.title}
          placeholder="Add todo here..."
          onChange={event => dispatch({
            type: TODO_LIST_ITEM_JOB_CHANGED,
            payload: event.target.value,
          })}
        />
      </label>
    </section>
  )
}

export default InputForm
