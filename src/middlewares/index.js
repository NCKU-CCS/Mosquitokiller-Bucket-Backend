import PlacesController from './places'

const Place = new PlacesController()

const places = [Place.fetchItems]

const middleWare = [...places]

export default middleWare
