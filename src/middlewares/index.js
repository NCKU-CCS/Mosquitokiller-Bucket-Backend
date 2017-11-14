import ReduxMethod from '../redux/reduxMethod'
import APIController from './fetchMiddleware'

// PlacesMiddleware
const placeRedux = new ReduxMethod('places')
const placesTypes = placeRedux.types
const PlaceController = new APIController('/places/', 'place_id', placesTypes)
const places = [PlaceController.fetchItems, PlaceController.fetchAddItem, PlaceController.fetchUpdateItem]

// LampsMiddleware
const lampRedux = new ReduxMethod('lamps')
const lampsTypes = lampRedux.types
const lampController = new APIController('/lamps/', 'lamp_id', lampsTypes)
const lamps = [lampController.fetchItems, lampController.fetchAddItem, lampController.fetchUpdateItem]

const middleWare = [...places, ...lamps]

export default middleWare
