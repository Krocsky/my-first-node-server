let {
  createCardsOfDecks
} = require('./card')

class Shuffler {
  constructor(deckAmount, id) {
    this.deckAmount = deckAmount
    this.cards = createCardsOfDecks(this.deckAmount)
    this.playerCardAmount = this.cards.length / this.deckAmount
  }

  deal() {
    return this.cards.splice(0, this.playerCardAmount)
  }
}

module.exports = Shuffler
