

export default class ReduxMethod {
  constructor (name) {

    // Actions
    this.types = {
      LOAD: `${name}/LOAD`,
      CREATE: `${name}/CREATE`,
      UPDATE: `${name}/UPDATE`,
      REMOVE: `${name}/REMOVE`,
      FETCH_LOAD: `${name}/FETCH_LOAD`,
      FETCH_ADD: `${name}/FETCH_ADD`,
      FETCH_UPDATE: `${name}/FETCH_UPDATE`
    }

    // Action Creators
    this.actions = {
      onInitData: (items) => ({
        type: this.types.LOAD,
        payload: items
      }),
    
      onItemAdd: (payload) => ({
        type: this.types.CREATE,
        payload
      }),
    
      onItemUpdate: (payload) => ({
        type: this.types.UPDATE,
        payload
      }),
    
      onItemEdit: (payload) => ({
        type: this.types.UPDATE,
        payload
      }),
    
      onFetchLoadItems: () => (
        {
          type: this.types.FETCH_LOAD,
          cb: (response, dispatch) => dispatch(this.actions.onInitData(response))
        }
      ),
    
      onFetchAddItem: (payload) => (
        {
          type: this.types.FETCH_ADD,
          payload,
          cb: (response, dispatch) => dispatch(this.actions.onItemAdd(response))
        }
      ),
    
      onFetchUpdateItem: (payload) => (
        {
          type: this.types.FETCH_UPDATE,
          payload,
          cb: (response, dispatch) => dispatch(this.actions.onItemUpdate(response))
        }
      )
    }
    this.reducer = this.reducer.bind(this)
  }
  // Reducer
  reducer (state = [], action = {}) {
    switch (action.type) {
      case this.types.LOAD:
        {
          return [...action.payload]
        }
  
      case this.types.CREATE:
        {
          return [action.payload, ...state]
        }
  
      case this.types.UPDATE:
        {
          const newItems = [...state]
          const index = newItems.findIndex((item) => item.place_id === action.payload.place_id)
  
          if (index === -1) return newItems
  
          newItems[index] = action.payload
  
          return newItems
        }
  
      default:
        return state
    }
  }
}


