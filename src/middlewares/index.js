import { types } from '../redux'
import APIController from './fetchMiddleware'

const getMiddleWares = (route, id, types) => {
  const controller = new APIController(route, id, types)
  return [controller.fetchItems, controller.fetchAddItem, controller.fetchUpdateItem]
}

// MiddleWares
const places = getMiddleWares('/places/', 'place_id', types.places)
const lamps = getMiddleWares('/lamps/', 'lamp_id', types.lamps)
const mccs = getMiddleWares('/mcc/', 'mcc_id', types.mcc)

const middleWares = [...places, ...lamps, ...mccs]

export default middleWares
