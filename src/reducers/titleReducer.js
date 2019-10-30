export const ADD_TITLE = "ADD_TITLE";

const initialState = {
  title: ""
}

export function titleReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_TITLE:
      return {
        ...state,
        title: action.payload
      }
    default:
      return state
  }
}