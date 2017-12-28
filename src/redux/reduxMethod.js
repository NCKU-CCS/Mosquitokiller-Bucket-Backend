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
      FETCH_REMOVE: `${name}/FETCH_REMOVE`,
      FETCH_CREATE_FAIL: `${name}/FETCH_CREATE_FAIL`,
      FETCH_UPDATE_FAIL: `${name}/FETCH_UPDATE_FAIL`
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
        success: (response, dispatch) => dispatch(this.actions.onInitData(response))
      }),

      onFetchAddItem: payload => ({
        type: this.types.FETCH_CREATE,
        payload,
        success: (response, dispatch) => dispatch(this.actions.onItemAdd(response)),
        fail: (errorResponse, dispatch) => dispatch(this.actions.onFetchAddItemFail(errorResponse))
      }),

      onFetchUpdateItem: payload => ({
        type: this.types.FETCH_UPDATE,
        payload,
        success: (response, dispatch) => dispatch(this.actions.onItemUpdate(response)),
        fail: (errorResponse, dispatch) => dispatch(this.actions.onFetchUpdateItemFail(errorResponse))
      }),

      onFetchRemoveItem: payload => ({
        type: this.types.FETCH_REMOVE,
        payload,
        success: (response, dispatch) => dispatch(this.actions.onItemRemove(response))
      }),

      onFetchAddItemFail: payload => ({
        type: this.types.FETCH_CREATE_FAIL,
        payload
      }),

      onFetchUpdateItemFail: payload => ({
        type: this.types.FETCH_UPDATE_FAIL,
        payload
      })
    }
    this.reducer = this.reducer.bind(this)
  }
  // Reducer
  reducer (state = {}, action = {}) {
    switch (action.type) {
      case this.types.LOAD: {
        return {itemList: [...action.payload]}
      }

      case this.types.CREATE: {
        return {itemList: [action.payload, ...state.itemList]}
      }

      case this.types.UPDATE: {
        const newItems = [...state.itemList]
        const index = newItems.findIndex(
          item => item[this.Id] === action.payload[this.Id]
        )

        if (index === -1) return {itemList: newItems}

        newItems[index] = action.payload

        return {itemList: newItems}
      }

      case this.types.REMOVE: {
        const newItems = [...state.itemList]
        const index = newItems.findIndex(
          item => item[this.Id] === action.payload
        )

        if (index === -1) return newItems

        newItems.splice(index, 1)

        return {itemList: newItems}
      }

      // Error Handling
      case this.types.FETCH_CREATE_FAIL: {
        return {...state, postError: action.payload}
      }

      case this.types.FETCH_UPDATE_FAIL: {
        return {...state, putError: action.payload}
      }

      default:
        return state
    }
  }
}
