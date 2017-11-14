
import {types, actions} from '../redux/places.js'

const BASE = 'http://localhost:3001/apis'
const ROUTE = '/places/'
const ID = 'place_id'

//
// Get All Items
//
const fetchItems = (store) => (next) => (action) => {
  if (action.type !== types.FETCH_LOAD) return next(action)

  fetch(`${BASE}${ROUTE}`, {
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

//
// Update Item
//
const fetchUpdateItem = (store) => (next) => (action) => {
  if (action.type !== types.FETCH_UPDATE) return next(action)
  
  const payload = Object.keys(action.payload).reduce((prev, current) => {
    prev[current] = action.payload[current].value || null
    return prev
  }, {})

  console.log(payload)

  fetch(`${BASE}${ROUTE}${payload[ID]}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(payload)
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText)
    return 
  })
  .then(() => {
    const stateItem = Object.assign({}, payload, { isEditing: false })
    return action.cb(stateItem, store.dispatch)
  })
  .catch((error) => { throw new Error(error.message) })

}


export default class PlacesController {
  constructor () {
    this.fetchItems = fetchItems.bind(this)
    this.fetchUpdateItem = fetchUpdateItem.bind(this)
  }
}
