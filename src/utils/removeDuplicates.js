export function getNotRedundantValues(values) {
  const splitedValues = values.split(/[\n|\n\r]/).filter(value => value !== "")

  let filteredValues = []

  splitedValues.forEach(value => {
    value = value.trim()

    if (value.startsWith("resml") || value.startsWith("relrg")) value = value.slice(0,8)
    if (value.startsWith("reGW")) value = value.slice(0,7)
    if (!filteredValues.includes(value)) filteredValues.push(value)
  })

  return filteredValues
}