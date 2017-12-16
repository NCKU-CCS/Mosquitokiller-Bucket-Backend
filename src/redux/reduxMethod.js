export default class ReduxMethod {
  constructor (name, Id) {
    // ID name for reducer
    this.Id = Id

    // Actions
    this.types = {
      LOAD: `${name}/LOAD`,
      CREATE: `${name}/CREATE`,
      UPDATE: `${name}/UPDATE`,
      REMOVE: `${name}/REMOVE`,
      FETCH_LOAD: `${name}/FETCH_LOAD`,
      FETCH_CREATE: `${name}/FETCH_CREATE`,
      FETCH_UPDATE: `${name}/FETCH_UPDATE`,
      FETCH_REMOVE: `${name}/FETCH_REMOVE`
    }

    // Action Creators
    this.actions = {
      onInitData: items => ({
        type: this.types.LOAD,
        payload: items
      }),

      onItemAdd: payload => ({
        type: this.types.CREATE,
        payload
      }),

      onItemUpdate: payload => ({
        type: this.types.UPDATE,
        payload
      }),

      onItemEdit: payload => ({
        type: this.types.UPDATE,
        payload
      }),

      onItemRemove: payload => ({
        type: this.types.REMOVE,
        payload
      }),

      onFetchLoadItems: () => ({
        type: this.types.FETCH_LOAD,
        cb: (response, dispatch) => dispatch(this.actions.onInitData(response))
      }),

      onFetchAddItem: payload => ({
        type: this.types.FETCH_CREATE,
        payload,
        cb: (response, dispatch) => dispatch(this.actions.onItemAdd(response))
      }),

      onFetchUpdateItem: payload => ({
        type: this.types.FETCH_UPDATE,
        payload,
        cb: (response, dispatch) => dispatch(this.actions.onItemUpdate(response))
      }),

      onFetchRemoveItem: payload => ({
        type: this.types.FETCH_REMOVE,
        payload,
        cb: (response, dispatch) => dispatch(this.actions.onItemRemove(response))
      })
    }
    this.reducer = this.reducer.bind(this)
  }
  // Reducer
  reducer (state = [], action = {}) {
    switch (action.type) {
      case this.types.LOAD: {
        return [...action.payload]
      }

      case this.types.CREATE: {
        return [action.payload, ...state]
      }

      case this.types.UPDATE: {
        const newItems = [...state]
        const index = newItems.findIndex(
          item => item[this.Id] === action.payload[this.Id]
        )

        if (index === -1) return newItems

        newItems[index] = action.payload

        return newItems
      }

      case this.types.REMOVE: {
        const newItems = [...state]
        const index = newItems.findIndex(
          item => item[this.Id] === action.payload
        )

        if (index === -1) return newItems

        newItems.splice(index, 1)

        return newItems
      }

      default:
        return state
    }
  }
}
