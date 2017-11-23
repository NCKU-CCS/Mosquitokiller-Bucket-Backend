const headList = {
  'lamp_location': ['lamp_lon', 'lamp_lat']
}

const setKeysToHeads = (heads, key) => {
  if (headList[key]) {
    heads.push(...headList[key])
  } else {
    heads.push(key)
  }
  return heads
}

export default setKeysToHeads