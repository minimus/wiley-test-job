import {
  TODO_LIST_ITEM_ADD,
  TODO_LIST_ITEM_DELETE,
  TODO_LIST_ITEM_TASK_CHANGED,
  TODO_LIST_ITEM_TITLE_CHANGED,
  TODO_LIST_LOAD, TODO_LIST_SAVE,
} from './actions'

export const initialState = {
  title: '',
  task: '',
  editedItem: -1,
  list: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TODO_LIST_LOAD: {
      const storage = window.localStorage
      try {
        const list = JSON.parse(storage.getItem('todoList')) || []
        return { ...state, list }
      } catch (e) {
        return { ...state, list: [] }
      }
    }

    case TODO_LIST_SAVE: {
      const storage = window.localStorage
      const todoList = (action.payload === null) ? [] : [...action.payload]
      storage.setItem('todoList', JSON.stringify(todoList))
      return state
    }

    case TODO_LIST_ITEM_ADD: {
      const list = [...state.list, { ...action.payload, id: state.list.length }].sort((a, b) => {
        if (a.title < b.title) return 1
        if (a.title > b.title) return -1
        return 0
      })
      return { ...state, list }
    }

    case TODO_LIST_ITEM_TITLE_CHANGED:
      return { ...state, title: action.payload }

    case TODO_LIST_ITEM_TASK_CHANGED:
      return { ...state, task: action.payload }

    case TODO_LIST_ITEM_DELETE:
      return state

    default: return state
  }
}
