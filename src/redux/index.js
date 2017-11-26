import ReduxMethod from './reduxMethod'
import Props from '../config/Props'

const reduxInit = {
  types: {},
  actions: {},
  reducers: {}
}

const Redux = Object.values(Props).reduce((prev, curr)=>{
  const itemName = curr.route
  const itemId = curr.itemId

  const redux = new ReduxMethod(itemName, itemId)
  prev.types[itemName] = redux.types
  prev.actions[itemName] = redux.actions
  prev.reducers[itemName] = redux.reducer

  return prev
}, reduxInit)

export const types = Redux.types
export const actions = Redux.actions
export default Redux.reducers
