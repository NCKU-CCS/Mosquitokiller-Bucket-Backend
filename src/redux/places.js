
// Actions

export const types = {
  LOAD: 'places/LOAD',
  CREATE: 'places/CREATE',
  UPDATE: 'places/UPDATE',
  REMOVE: 'places/REMOVE',
  FETCH_LOAD: 'places/FETCH_LOAD',
  FETCH_ADD: 'places/FETCH_ADD',
  FETCH_UPDATE: 'places/FETCH_UPDATE'
}

// Action Creators

export const actions = {
  onInitData: (items) => ({
    type: types.LOAD,
    payload: items
  }),

  onItemAdd: (payload) => ({
    type: types.CREATE,
    payload
  }),

  onItemUpdate: (payload) => ({
    type: types.UPDATE,
    payload
  }),

  onItemEdit: (payload) => ({
    type: types.UPDATE,
    payload
  }),

  onFetchLoadItems: () => (
    {
      type: types.FETCH_LOAD,
      cb: (response, dispatch) => dispatch(actions.onInitData(response))
    }
  ),

  onFetchAddItem: (payload) => (
    {
      type: types.FETCH_ADD,
      payload,
      cb: (response, dispatch) => dispatch(actions.onItemAdd(response))
    }
  ),

  onFetchUpdateItem: (payload) => (
    {
      type: types.FETCH_UPDATE,
      payload,
      cb: (response, dispatch) => dispatch(actions.onItemUpdate(response))
    }
  )
}

// Reducer

export default function reducer (state = [], action = {}) {
  switch (action.type) {
    case types.LOAD:
      {
        return [...action.payload]
      }

    case types.CREATE:
      {
        return [action.payload, ...state]
      }

    case types.UPDATE:
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
