/* eslint-disable filenames/match-regex */
const dict = require('./dict')


describe('dict', () => {

  const db = [
    ['cat', 'die Katze'],
    ['catalog', 'der Katalog'],
    ['cats', 'die Katzen'],

  ]

  describe('lookup', () => {


    it('finds translation', () => {

      db.forEach(([english, german]) => {
        const translation = dict.lookup(english)
        expect(translation).toBe(german)
      })

    })

    it('returns null for unknowns', () => {
      const translation = dict.lookup('not-in-db')
      expect(translation).toBe(null)
    })
  })

  describe('suggest', () => {

    it('suggests correct items', () => {

      const suggestions = dict.suggest('cat')
      expect(suggestions.includes('cat')).toBeTruthy()
      expect(suggestions.includes('catalog')).toBeTruthy()
      expect(suggestions.includes('cats')).toBeTruthy()
      expect(suggestions.includes('house')).toBeFalsy()

      expect(dict.suggest('h').length).toBe(1)
    })

  })
})
