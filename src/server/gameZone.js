let uuidV4 = require('uuid/v4')
let zone = {}
let queue = []

let createZone = function() {
  let newId = uuidV4()
  while (zone.hasOwnProperty(newId)) {
    newId = uuidV4()
  }
  zone[newId] = {}
  return newId
}

let checkEmpty = function() {

}

exports.autoMatch = function() {

}
