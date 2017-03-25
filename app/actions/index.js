
export const getActive = (element) => {
  return {
    type: 'GET_ACTIVE',
  }
}
export const setActive = (smthg) => {
  return {
    type: 'SET_ACTIVE',
    element: smthg
  }
}
