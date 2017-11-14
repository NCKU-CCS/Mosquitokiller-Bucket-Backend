import PlacesController from './places'

const Place = new PlacesController()
const places = [Place.fetchItems, Place.fetchUpdateItem]

const middleWare = [...places]

export default middleWare
