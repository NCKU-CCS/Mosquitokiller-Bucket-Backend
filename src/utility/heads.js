const headList = {
  'lamp_location': ['lamp_longitude', 'lamp_latitude']
}

/**
 * Divide keys of array data to multiple keys for rendering
 * e.g. divide 'lamp_location' to 'lamp_longitude' & 'lamp_latitude' (two value)
 * 
 * @param   Array  heads: names of columns
 * @param   String key: name of single column
 * @return  Array
 */
const mapKeysToHeads = (heads, key) => {
  if (headList[key]) {
    heads.push(...headList[key])
  } else {
    heads.push(key)
  }
  return heads
}

export default mapKeysToHeads