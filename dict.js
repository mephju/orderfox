const lookupTable = require('./lookupTable')


const db = [
  ['cat', 'die Katze'],
  ['catalog', 'der Katalog'],
  ['cats', 'die Katzen'],
  ['house', 'das Haus'],
]


const lookup = (query) => {
  const row = db.find(([englishWord]) => englishWord === query)
  return row?.[1] || null
}

const suggest = (query, limit = Infinity) => {
  const result = lookupTable[query] || []

  return result
  .slice(0, limit)
  .map(item => item[0])
}

module.exports = {
  lookup,
  suggest,
}


