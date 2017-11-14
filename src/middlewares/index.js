import APIController from './fetchMiddleware'

const Place = new APIController('/places/', 'place_id')
const places = [Place.fetchItems, Place.fetchUpdateItem]

const middleWare = [...places]

export default middleWare
