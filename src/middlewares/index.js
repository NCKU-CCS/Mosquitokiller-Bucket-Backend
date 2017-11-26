import { types } from '../redux'
import APIController from './fetchMiddleware'
import Props from '../config/Props'

const getMiddleWares = (route, id, types) => {
  const controller = new APIController(route, id, types)
  return [controller.fetchItems, controller.fetchAddItem, controller.fetchUpdateItem]
}

// Generate arguments of middleware of each item
const List = Object.values(Props).map(values => (
  {Route: `/${values.route}/`, ID: values.itemId, types: types[values.route]}
), [])

// MiddleWares
const middleWares = List.reduce((prev, curr)=>{
  const middleWare = getMiddleWares(curr.Route, curr.ID, curr.types)
  prev.push(...middleWare)
  return prev
}, [])

export default middleWares
