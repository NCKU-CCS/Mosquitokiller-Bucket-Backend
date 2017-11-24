import ReduxMethod from './reduxMethod'

const List = ['places', 'lamps', 'mcc', 'states']

const reduxInit = {
  types: {},
  actions: {},
  reducers: {}
}

const Redux = List.reduce((prev, curr)=>{
  const redux = new ReduxMethod(curr)
  prev.types[curr] = redux.types
  prev.actions[curr] = redux.actions
  prev.reducers[curr] = redux.reducer
  return prev
}, reduxInit)

export const types = Redux.types
export const actions = Redux.actions
export default Redux.reducers
