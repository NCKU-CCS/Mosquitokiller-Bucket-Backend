import ReduxMethod from '../redux/reduxMethod'
import APIController from './fetchMiddleware'

const placeRedux = new ReduxMethod('places')
const placesTypes = placeRedux.types

const Place = new APIController('/places/', 'place_id', placesTypes)
const places = [Place.fetchItems, Place.fetchAddItem, Place.fetchUpdateItem]

const middleWare = [...places]

export default middleWare
