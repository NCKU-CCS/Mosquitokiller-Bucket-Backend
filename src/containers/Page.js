import ContainerGenerator from './containerGenerator'

const placeProps = {
  itemId: 'place_id',
  nonEditList: ['place_id', 'created_at', 'updated_at', 'isEditing'],
  postModel: [
    ['place_name', 'string'],
    ['place_address', 'string'],
    ['place_contact_person', 'string'],
    ['place_phone', 'string']
  ]
}

const lampProps = {
  itemId: 'lamp_id',
  nonEditList: ['lamp_id', 'lamp_hash_id', 'created_at', 'updated_at', 'isEditing'],
  postModel: [
    ['lamp_location', 'string'],
    ['lamp_deployed_date', 'date'],
    ['lamp_wifi_ssid', 'string'],
    ['lamp_wifi_password', 'string'],
    ['place_id', 'number'],
  ]
}

const Places = ContainerGenerator('places', placeProps)
export const Lamps = ContainerGenerator('lamps', lampProps)


export default Places


