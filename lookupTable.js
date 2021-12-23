

const rows = [
  ['cat', 'die Katze'],
  ['catalog', 'der Katalog'],
  ['cats', 'die Katzen'],
  ['house', 'das Haus'],
]

const generateInputsForWord = word => {
  return word
  .split('')
  .map((_char, i) => word.slice(0, i + 1))
}

const generateInputs = () => {

  const inputs = rows.reduce((acc, row) => {
    const [word] = row
    const inputs = generateInputsForWord(word)

    return acc.concat(inputs)
  }, [])

  return Array.from(new Set(inputs))

}

const inputs = generateInputs()

const lookupTable = inputs.reduce((acc, input) => {
  acc[input] = rows.filter(row => row[0].includes(input))
  return acc
}, {})

module.exports = lookupTable
