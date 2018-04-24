import * as types from '../utils/constants';

const API_URL = 'http://localhost:9001';

export const setTodoDoneStart = () => ({
  type: types.SET_TODO_DONE_START
})

export const setTodoDoneError = (error: Error) => ({
  type: types.SET_TODO_DONE_ERROR,
  error
});

export const setTodoDoneSuccess = (id: Number, done: Boolean) => ({
  type: types.SET_TODO_DONE_SUCCESS,
  payload: {
    id,
    done
  }
})

// Changed from id: Number into todo: Object to use PUT /todos/:id, avoid creating custom api routes
export const setTodoDone = (todo: Object, done: Boolean) => dispatch => {
  dispatch(setTodoDoneStart());

  return fetch(`${API_URL}/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...todo, done })
  })
    .then((response) => dispatch(setTodoDoneSuccess(todo.id, done)))
    .catch((error) => dispatch(setTodoDoneError(error)));
}

export const setTodoArchiveStart = () => ({
  type: types.SET_TODO_ARCHIVED_START
})

export const setTodoArchiveError = (error: Error) => ({
  type: types.SET_TODO_ARCHIVED_ERROR,
  error
});

export const setTodoArchiveSuccess = (id: Number, done: Boolean) => ({
  type: types.SET_TODO_ARCHIVED_SUCCESS,
  payload: {
    id,
    done
  }
})

export const archiveTodo = (todo: Object, archived: Boolean) => dispatch => {
  dispatch(setTodoArchiveStart());

  return fetch(`${API_URL}/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...todo, archived })
  })
    .then((response) => dispatch(setTodoArchiveSuccess(todo.id, archived)))
    .catch((error) => dispatch(setTodoArchiveError(error)));
}

export const deleteTodoStart = () => ({
  type: types.DELETE_TODO_START,
});

export const deleteTodoError = (error: Error) => ({
  type: types.DELETE_TODO_ERROR,
  error
});

export const deleteTodoSuccess = (id: Number) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload: {
    id
  }
});

export const deleteTodo = (id: Number) => dispatch => {
  dispatch(deleteTodoStart());

  return fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE',
  })
    .then((response) => dispatch(deleteTodoSuccess(id)))
    .catch((error) => dispatch(deleteTodoError(error)));
}


export const addTodoStart = () => ({
  type: types.ADD_TODO_START
});

export const addTodoError = (error: Error) => ({
  type: types.ADD_TODO_ERROR,
  error
});

export const addTodoSuccess = (todo: Object) => ({
  type: types.ADD_TODO_SUCCESS,
  payload: {
    todo
  }
});

export const addTodo = (task: String) => dispatch => {
  dispatch(addTodoStart());

  return fetch(`${API_URL}/todos`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      task,
      done: false,
      deleted: false,
      archived: false,
    })
  })
    .then((response) => response.json())
    .then((body) => dispatch(addTodoSuccess(body)))
    .catch((error) => dispatch(addTodoError(error)));
}


export const fetchTodosStart = () => ({
  type: types.FETCH_TODOS_START
});

export const fetchTodosError = (error: Error) => ({
  type: types.FETCH_TODOS_ERROR,
  error
});

export const fetchTodosSuccess = (todos: Array) => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload: { todos }
});

export const fetchTodos = () => dispatch => {
  dispatch(fetchTodosStart());

  return fetch(`${API_URL}/todos`)
    .then((response) => response.json())
    .then((body) => dispatch(fetchTodosSuccess(body)))
    .catch((error) => dispatch(fetchTodosError(error)));
}

export const changeFilter = (visibilityFilter) => ({
  type: types.CHANGE_FILTER,
  payload: {
    filterChange: visibilityFilter
  }
});

export const searchFilter = (searchStr) => ({
  type: types.SEARCH_FILTER,
  payload: {
    searchFilter: searchStr
  }
});