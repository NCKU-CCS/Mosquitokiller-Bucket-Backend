const BASE = 'http://localhost:3001/apis'

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=utf-8'
}

export default class APIController {
  constructor (route, id, types) {
    this.route = route
    this.id = id
    this.types = types
    this.fetchItems = this.fetchItems.bind(this)
    this.fetchAddItem = this.fetchAddItem.bind(this)
    this.fetchUpdateItem = this.fetchUpdateItem.bind(this)
    this.fetchRemoveItem = this.fetchRemoveItem.bind(this)
  }

  async _request (uri, method, payload = null) {
    const content = {
      method: method,
      credentials: 'include',
      headers: HEADERS
    }
    if (payload) {
      content.body = JSON.stringify(payload)
    }
    return fetch(uri, content)
  }

  //
  // GET All Items
  //
  fetchItems (store) {
    return next => async action => {
      if (action.type !== this.types.FETCH_LOAD) return next(action)
      try {
        // send get request
        const uri = `${BASE}${this.route}`
        const response = await this._request(uri, 'GET')

        if (response.status !== 200) {
          const message = await response.json()
          throw { ...message, status: response.status }
        } else {
          const itemList = await response.json()
          const items = itemList.map(item => {
            return Object.assign({}, item, { isEditing: false })
          })
          return action.success(items, store.dispatch)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  //
  // POST NEW Item
  //
  fetchAddItem (store) {
    return next => async action => {
      if (action.type !== this.types.FETCH_CREATE) return next(action)

      try {
        // get values from input element
        const payload = getValueFromInput(action.payload)

        // send post request
        const uri = `${BASE}${this.route}`
        const response = await this._request(uri, 'POST', payload)

        // check response
        const stateItem = await getItemFromResponse(response, 201)
        return action.success(stateItem, store.dispatch)
      } catch (error) {
        console.log(error)
        return action.fail(error, store.dispatch)
      }
    }
  }

  //
  // PUT OLD Item
  //
  fetchUpdateItem (store) {
    return next => async action => {
      if (action.type !== this.types.FETCH_UPDATE) return next(action)

      try {
        // get values from input element
        const payload = getValueFromInput(action.payload)

        // send put request
        const uri = `${BASE}${this.route}${payload[this.id]}`
        const response = await this._request(uri, 'PUT', payload)

        // check response
        const stateItem = await getItemFromResponse(response, 200)
        return action.success(stateItem, store.dispatch)
      } catch (error) {
        console.log(error)
        return action.fail(error, store.dispatch)
      }
    }
  }

  //
  // DELETE OLD Item
  //
  fetchRemoveItem (store) {
    return next => async action => {
      if (action.type !== this.types.FETCH_REMOVE) return next(action)

      try {
        // get value from input element
        const itemId = action.payload

        // send put request
        const uri = `${BASE}${this.route}${itemId}`
        const response = await this._request(uri, 'DELETE')

        // check response
        if (response.status !== 204) {
          const message = await response.json()
          throw { ...message, status: response.status }
        } else {
          return action.success(itemId, store.dispatch)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

/**
 * Get values from form inputs for sending http request
 *
 * @param   Object inputs: input dom from form
 * @return  Object
 */
const getValueFromInput = inputs => {
  return Object.keys(inputs).reduce((prev, current) => {
    // get array value or normal value
    if (inputs[current].length > 1) {
      prev[current] = inputs[current].map(input => input.value)
      // remove this array value if contains empty string
      if (prev[current].includes('')) {
        delete prev[current]
      }
    } else if (inputs[current].value) {
      prev[current] = inputs[current].value
    }
    return prev
  }, {})
}

/**
 * Get new item data from response body for setting new states
 *
 * @param   Object  response: response return from fetch request
 * @param   Number  status:  success status value e.g. 200
 * @return  Object
 */
const getItemFromResponse = async (response, status = 200) => {
  if (response.status !== status) {
    const message = await response.json()
    throw { ...message, status: response.status }
  } else {
    const item = await response.json()
    return Object.assign({}, item, { isEditing: false })
  }
}
