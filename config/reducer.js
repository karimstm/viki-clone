import { SET_USER } from "./types";

export const initialState = {
  user: null,
  token: "token",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
      break;
  }
};

export default reducer;
