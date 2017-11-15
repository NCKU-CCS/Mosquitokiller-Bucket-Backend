import ReduxMethod from './reduxMethod'

const placeRedux = new ReduxMethod('places')
const lampRedux = new ReduxMethod('lamps')
const mccRedux = new ReduxMethod('mcc')

export const types = {
  places: placeRedux.types,
  lamps: lampRedux.types,
  mcc: mccRedux.types,
}

export const actions = {
  places: placeRedux.actions,
  lamps: lampRedux.actions,
  mcc: mccRedux.actions,
}

const reducers = {
  places: placeRedux.reducer,
  lamps: lampRedux.reducer,
  mcc: mccRedux.reducer,
}

export default reducers
