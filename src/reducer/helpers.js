export function loadFromStorage() {
  const storage = window.localStorage
  try {
    return JSON.parse(storage.getItem('todoList')) || []
  } catch (e) {
    return []
  }
}

export function saveToStorage(list) {
  const storage = window.localStorage
  const todoList = (list === null) ? [] : [...list]
  storage.setItem('todoList', JSON.stringify(todoList))
}
