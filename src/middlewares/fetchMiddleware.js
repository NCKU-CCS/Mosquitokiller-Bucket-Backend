import {types} from '../redux/places.js'

const BASE = 'http://localhost:3001/apis'


export default class APIController {
  constructor (ROUTE, ID) {
    this.ROUTE = ROUTE
    this.ID = ID
    this.fetchItems = this.fetchItems.bind(this)
    this.fetchUpdateItem = this.fetchUpdateItem.bind(this)
  }

  //
  // Get All Items
  //
  fetchItems = (store) => (next) => (action) => {
    if (action.type !== types.FETCH_LOAD) return next(action)
  
    fetch(`${BASE}${this.ROUTE}`, {
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
  // POST NEW Item
  //
  fetchAddItem = (store) => (next) => (action) => {
    if (action.type !== types.FETCH_ADD) return next(action)
 
    const payload = Object.keys(action.payload).reduce((prev, current) => {
      prev[current] = action.payload[current].value || null
      return prev
    }, {})

    fetch(`${BASE}${this.ROUTE}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then((item) => {
      const stateItem = Object.assign({}, item, { isEditing: false })
      return action.cb(stateItem, store.dispatch)
    })
    .catch((error) => { throw new Error(error.message) })
  }


  //
  // Update Item
  //
  fetchUpdateItem = (store) => (next) => (action) => {
    if (action.type !== types.FETCH_UPDATE) return next(action)
    
    // get value from input element
    const payload = Object.keys(action.payload).reduce((prev, current) => {
      prev[current] = action.payload[current].value || null
      return prev
    }, {})
  
    fetch(`${BASE}${this.ROUTE}${payload[this.ID]}`, {
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

}
