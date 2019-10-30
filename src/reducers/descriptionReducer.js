export const ADD_DESCRIPTION = "ADD_DESCRIPTION";

const initialState = {
  description: ""
}

export function descriptionReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      }
    default:
      return state
  }
}