import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TODO_LIST_ITEM_ADD, TODO_LIST_ITEM_CLEAR } from '../reducer/actions'

const InputFormButtons = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const { title, task } = useSelector(state => state)
  const dispatch = useDispatch()
  const disabled = !title || !task

  return (
    <div className="input-form__buttons-holder">
      <input
        className="btn btn-success input-form__buttons-holder__button"
        type="button"
        value="Add"
        disabled={disabled}
        onClick={() => dispatch({
          type: TODO_LIST_ITEM_ADD,
          payload: {
            id: -1,
            title,
            task,
            completed: false,
          },
        })}
      />
      <input
        className="btn btn-danger input-form__buttons-holder__button"
        type="button"
        value="Clear"
        disabled={disabled}
        onClick={() => dispatch({
          type: TODO_LIST_ITEM_CLEAR,
          payload: false,
        })}
      />
    </div>
  )
}

export default InputFormButtons
