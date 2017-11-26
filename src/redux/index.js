import ReduxMethod from './reduxMethod'
import Props from '../config/Props'

const reduxInit = {
  types: {},
  actions: {},
  reducers: {}
}

const Redux = Object.values(Props).reduce((prev, curr)=>{
  const route = curr.route
  const itemId = curr.itemId

  const redux = new ReduxMethod(route, itemId)
  prev.types[route] = redux.types
  prev.actions[route] = redux.actions
  prev.reducers[route] = redux.reducer

  return prev
}, reduxInit)

export const types = Redux.types
export const actions = Redux.actions
export default Redux.reducers
