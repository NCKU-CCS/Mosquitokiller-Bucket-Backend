import { actions } from '../redux'
import ContainerGenerator from './containerGenerator'

const placeProps = {
  itemId: 'place_id',
  nonEditList: ['place_id', 'created_at', 'updated_at', 'isEditing'],
  postModel: {
    'place_name': 'string',
    'place_address': 'string',
    'place_contact_person': 'string',
    'place_phone': 'string'
  }
}

const lampProps = {
  itemId: 'lamp_id',
  nonEditList: ['lamp_id', 'lamp_hash_id', 'created_at', 'updated_at', 'isEditing'],
  postModel: {
    'lamp_location': 'string',
    'lamp_deployed_date': 'date',
    'lamp_wifi_ssid': 'string',
    'lamp_wifi_password': 'string',
    'place_id': 'number'
  }
}

const mccProps = {
  itemId: 'mcc_id',
  nonEditList: ['mcc_id', 'mcc_keys', 'mcc_points', 'mcc_center', 'rule_id', 'created_at', 'updated_at', 'isEditing'],
  postModel: {
    'mcc_center': 'string'
  }
}

const stateProps = {
  itemId: 'state_id',
  nonEditList: ['state_id', 'created_at', 'updated_at', 'isEditing'],
  postModel: {
    'lamp_id': 'string',
    'lamp_state': 'number',
    'lamp_check_date': 'date',
    'lamp_check_person': 'string',
    'state_description': 'string',
    'state_reason': 'string'
  }
}

const Places = ContainerGenerator('places', placeProps, actions.places)
export const Lamps = ContainerGenerator('lamps', lampProps, actions.lamps)
export const Mccs = ContainerGenerator('mcc', mccProps, actions.mcc)
export const States = ContainerGenerator('states', stateProps, actions.states)


export default Places


