/** @format */

const initialState = []
export const loginuserdata = (state = initialState, action) => {
  switch (action.type) {
    case "data":
      return {
        list: [...state.list, action.payloads],
      };
     
    default:
      return state;
  }
};
