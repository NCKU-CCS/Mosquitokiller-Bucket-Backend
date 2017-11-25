const headList = {
  'lamp_location': ['lamp_longitude', 'lamp_latitude']
}

const mapKeysToHeads = (heads, key) => {
  if (headList[key]) {
    heads.push(...headList[key])
  } else {
    heads.push(key)
  }
  return heads
}

export default mapKeysToHeads