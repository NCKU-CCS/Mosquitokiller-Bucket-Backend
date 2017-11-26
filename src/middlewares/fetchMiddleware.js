const BASE = 'http://localhost:3001/apis'

export default class APIController {
  constructor (route, id, types) {
    this.route = route
    this.id = id
    this.types = types
    this.fetchItems = this.fetchItems.bind(this)
    this.fetchUpdateItem = this.fetchUpdateItem.bind(this)
    this.fetchAddItem = this.fetchAddItem.bind(this)
  }

  //
  // GET All Items
  //
  fetchItems = (store) => (next) => (action) => {
    if (action.type !== this.types.FETCH_LOAD) return next(action)
  
    fetch(`${BASE}${this.route}`, {
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
    if (action.type !== this.types.FETCH_ADD) return next(action)
 
    // get value from input element
    const payload = getValueFromInput(action.payload)

    fetch(`${BASE}${this.route}`, {
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
  // PUT OLD Item
  //
  fetchUpdateItem = (store) => (next) => (action) => {
    if (action.type !== this.types.FETCH_UPDATE) return next(action)
    
    // get value from input element
    const payload = getValueFromInput(action.payload)
    
    // send request
    fetch(`${BASE}${this.route}${payload[this.id]}`, {
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

const getValueFromInput = (inputs) => {
  return Object.keys(inputs).reduce((prev, current) => {
    // get array value
    prev[current] = (inputs[current].length > 1)
      ? inputs[current].map(input => input.value)
      : inputs[current].value || null
    return prev

  }, {})
}