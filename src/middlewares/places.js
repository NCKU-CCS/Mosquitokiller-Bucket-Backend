
import {types} from '../redux/places.js'

const fetchItems = (store) => (next) => (action) => {
  if (action.type !== types.FETCH_LOAD) return next(action)

  fetch('http://localhost:3001/apis/places', {
    method: 'GET'
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
  })
  .then(itemList => {
    const items = itemList.map((item) => {
      return Object.assign({}, item, { isEditing: false })
    })

    return action.cb(items, store.dispatch)
  })
  .catch((error) => { throw new Error(error.message) })
}

export default class PlacesController {
  constructor () {
    this.fetchItems = fetchItems.bind(this)
  }
}
