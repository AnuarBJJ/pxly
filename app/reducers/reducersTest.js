const initialState = {
  active_element: "None chosen yet"
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case "SET_ACTIVE":
      return {active_element: action.element};
    default:
      return state;
  }
}
