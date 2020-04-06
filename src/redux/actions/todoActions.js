import * as types from './actionTypes';

// action creator returns an action
export function addTodo(text) {
  return { type: types.ADD_TODO, text: text };
}

export function toggleTodo(index) {
  return { type: types.TOGGLE_TODO, index: index };
}

export function setTodoVis(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter: filter };
}
