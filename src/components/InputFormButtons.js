import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TODO_LIST_ITEM_ADD, TODO_LIST_ITEM_CLEAR } from '../reducer/actions'

const InputFormButtons = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const title = useSelector(state => state.title)
  const task = useSelector(state => state.task)
  const editedItem = useSelector(state => state.editedItem)

  const dispatch = useDispatch()
  const disabled = !title || !task

  return (
    <div className="input-form__buttons-holder">
      <input
        className="btn btn-success input-form__buttons-holder__button"
        type="button"
        value={(editedItem === -1) ? 'Add' : 'Save'}
        disabled={disabled}
        onClick={() => dispatch({
          type: TODO_LIST_ITEM_ADD,
          payload: {
            idx: editedItem,
            title,
            task,
            completed: false,
          },
        })}
      />
      <input
        className="btn btn-danger input-form__buttons-holder__button"
        type="button"
        value={(editedItem === -1) ? 'Clear' : 'Cancel'}
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
