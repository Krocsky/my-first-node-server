const TYPES = {
  HEARTS: 0,
  CLUBS: 1,
  SPADES: 2,
  DIAMOND: 3,
  SPECIAL: 4
}

class Card {
  constructor(name, weight, type) {
    this.name = name
    this.weight = weight
    this.type = type
  }
}

let createCardsOfDecks = function(amount) {
  if (typeof amount === 'number' && amount > 1) {
    let _amount = amount >>> 0
    return new Array(_amount).fill(0).reduce((coll) => coll.concat(createCardsOfOneDeck()), [])
  } else {
    throw new TypeError('amount must be a number greater than 1.')
  }
}

let diffColors = function(name, weight) {
  let ret = []
  ret[ret.length] = new Card(name, weight, TYPES.SPADES)
  ret[ret.length] = new Card(name, weight, TYPES.CLUBS)
  ret[ret.length] = new Card(name, weight, TYPES.DIAMOND)
  ret[ret.length] = new Card(name, weight, TYPES.HEARTS)
  return ret
}

let createCardsOfOneDeck = function() {
  let ret = []
  ret[ret.length] = new Card('3', 3, TYPES.HEARTS)
  ret[ret.length] = new Card('b_joker', 16, TYPES.SPECIAL)
  ret[ret.length] = new Card('r_joker', 17, TYPES.SPECIAL)
  let cardsQueue = []
  for (let i = 4; i <= 10; i++) {
    cardsQueue[cardsQueue.length] = { name: i.toString(), weight: i };
  }
  cardsQueue[cardsQueue.length] = { name: 'J', weight: 11 }
  cardsQueue[cardsQueue.length] = { name: 'Q', weight: 12 }
  cardsQueue[cardsQueue.length] = { name: 'K', weight: 13 }
  cardsQueue[cardsQueue.length] = { name: 'A', weight: 14 }
  cardsQueue[cardsQueue.length] = { name: '2', weight: 15 }
  cardsQueue.forEach(card => {
    ret = ret.concat(diffColors(card.name, card.weight))
  })

  let length = ret.length
  let temp = null
  ret.forEach((c, i) => {
    let _index = length * Math.random() >>> 0
    let temp = ret[_index]
    ret[_index] = c
    ret[i] = temp
  })
  return ret
}

module.exports = {
  Card,
  createCardsOfDecks
}
