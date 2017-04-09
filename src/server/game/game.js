let uuidV4 = require('uuid/v4')
const Shuffler = require('./shuffler')
const RDM = Math.random
const PLAYER_REQUIRED = 6

class Game {
  constructor(deckAmount = 6) {
    this.id = uuidV4()
    this.deckAmount = deckAmount
    this.stack = null
    this.playersOnTable = []
  }

  positionRemained() {
    return PLAYER_REQUIRED - this.playersOnTable.length
  }

  join(playerId) {
    this.playersOnTable[this.playersOnTable.length] = playerId
    return this.positionRemained()
  }

  leave(playerId) {
    let _index = this.playersOnTable.indexOf(playerId)
    if (_index > -1) {
      // remove this player
      this.playersOnTable.splice(_index, 1)
    } else {
      // this player is not on this table
      console.warn(`player ${playerId} is not on this table ${this.id}`)
    }
  }

  deal() {
    if (this.playersOnTable.length === PLAYER_REQUIRED) {
      this.stack = new Map()
      let shuffler = new Shuffler(this.deckAmount, this.id)
      this.playersOnTable.forEach(playerId => {
        this.stack.set(playerId, shuffler.deal())
      })
      shuffler = null
    } else {
      throw new Error('Still need to wait for ${this.postionRemained()} more players')
    }
  }

  begin() {
    this.deal()
    console.log(this.stack)
  }
}

module.exports = Game
