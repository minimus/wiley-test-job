import {
  TODO_LIST_ITEM_ADD, TODO_LIST_ITEM_CLEAR, TODO_LIST_ITEM_COMPLETE,
  TODO_LIST_ITEM_DELETE, TODO_LIST_ITEM_EDIT, TODO_LIST_ITEM_TASK_CHANGED,
  TODO_LIST_ITEM_TITLE_CHANGED, TODO_LIST_LOAD,
} from './actions'
import { loadFromStorage, saveToStorage } from './helpers'

export const initialState = {
  title: '',
  task: '',
  editedItem: -1,
  list: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TODO_LIST_LOAD: {
      const list = loadFromStorage()
      return { ...state, list }
    }

    case TODO_LIST_ITEM_ADD: {
      const { editedItem } = state
      if (editedItem === -1) {
        const list = [
          ...state.list,
          { ...action.payload, idx: state.list.length }]
          .sort((a, b) => {
            if (a.title < b.title) return 1
            if (a.title > b.title) return -1
            return 0
          })
        saveToStorage(list)
        return {
          ...state,
          list,
          title: '',
          task: '',
          editedItem: -1,
        }
      }
      const list = [...state.list]
      const idx = list.findIndex(el => el.idx === editedItem)
      const [item] = list.splice(idx, 1)
      list.push({ ...item, ...action.payload })
      list.sort((a, b) => {
        if (a.title < b.title) return 1
        if (a.title > b.title) return -1
        return 0
      })
      saveToStorage(list)
      return {
        ...state,
        list,
        title: '',
        task: '',
        editedItem: -1,
      }
    }

    case TODO_LIST_ITEM_CLEAR:
      return {
        ...state, title: '', task: '', editedItem: -1,
      }

    case TODO_LIST_ITEM_TITLE_CHANGED:
      return { ...state, title: action.payload }

    case TODO_LIST_ITEM_TASK_CHANGED:
      return { ...state, task: action.payload }

    case TODO_LIST_ITEM_COMPLETE: {
      const list = [...state.list]
      const idx = list.findIndex(el => el.idx === action.payload)
      list[idx].completed = !list[idx].completed
      saveToStorage(list)
      return { ...state, list }
    }

    case TODO_LIST_ITEM_EDIT: {
      const list = [...state.list]
      const {
        title = '',
        task = '',
        idx: editedItem = -1,
      } = list.find(el => el.idx === action.payload)
      return {
        ...state, title, task, editedItem,
      }
    }

    case TODO_LIST_ITEM_DELETE: {
      const list = [...state.list]
      const idx = list.findIndex(el => el.idx === action.payload)
      list.splice(idx, 1)
      saveToStorage(list)
      return { ...state, list }
    }

    default: return state
  }
}
