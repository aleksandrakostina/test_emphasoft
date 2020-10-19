import { LOADED, LOADING } from "../actions";

const initialState = {
  isLoading: false
};

export const loaderReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOADED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
    }
  }