import { types } from '../redux'
import APIController from './fetchMiddleware'

// PlacesMiddleware
const PlaceController = new APIController('/places/', 'place_id', types.places)
const places = [PlaceController.fetchItems, PlaceController.fetchAddItem, PlaceController.fetchUpdateItem]

// LampsMiddleware
const lampController = new APIController('/lamps/', 'lamp_id', types.lamps)
const lamps = [lampController.fetchItems, lampController.fetchAddItem, lampController.fetchUpdateItem]

// MccMiddleware
const mccController = new APIController('/mcc/', 'mcc_id', types.mcc)
const mccs = [mccController.fetchItems, mccController.fetchAddItem, mccController.fetchUpdateItem]

const middleWare = [...places, ...lamps, ...mccs]

export default middleWare
