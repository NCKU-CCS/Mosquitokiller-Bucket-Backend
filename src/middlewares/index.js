import { types } from '../redux'
import APIController from './fetchMiddleware'

const getMiddleWares = (route, id, types) => {
  const controller = new APIController(route, id, types)
  return [controller.fetchItems, controller.fetchAddItem, controller.fetchUpdateItem]
}

const List = [
  {Route: '/places/', ID: 'place_id', types: types.places},
  {Route: '/lamps/', ID: 'lamp_id', types: types.lamps},
  {Route: '/mcc/', ID: 'mcc_id', types: types.mcc},
  {Route: '/states/', ID: 'state_id', types: types.states}
]

// MiddleWares
const middleWares = List.reduce((prev, curr)=>{
  const middleWare = getMiddleWares(curr.Route, curr.ID, curr.types)
  prev.push(...middleWare)
  return prev
}, [])

export default middleWares
