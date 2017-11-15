import ReduxMethod from './reduxMethod'

const placeRedux = new ReduxMethod('places')
const places = placeRedux.reducer

const lampRedux = new ReduxMethod('lamps')
const lamps = lampRedux.reducer

const mccRedux = new ReduxMethod('mcc')
const mcc = mccRedux.reducer

export {
  places, lamps, mcc
}
