import { actions } from '../redux'
import ContainerGenerator from './containerGenerator'
import Props from '../config/Props'

// Generate Each Page By Props Config
const Pages = Object.entries(Props).reduce((total, value) => {
  // value[0] = prop key (Lamps, Places...), value[1] = prop value
  total[value[0]] = ContainerGenerator(value[1], actions[value[1].route])
  return total
}, {}) 

export default Pages


