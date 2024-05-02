export function getNotRedundantValues(values) {
  const splitedValues = values.split(/[\n|\n\r]/).filter(value => value !== "")

  let filteredValues = []

  splitedValues.forEach(value => {
    value = value.trim()

    if (!filteredValues.includes(value)) filteredValues.push(value)
  })

  return filteredValues
}