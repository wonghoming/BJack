//import {createDeck} from '../objects/deck.js'

export function getCard(deck){
    var x = deck
    var suits =  Object.keys(x)
    var rand = Math.floor(Math.random()*4)
    var suit = suits[rand]

    var value = Math.floor(Math.random()*x[suit].length) //need to change this to random the whole deack rather tahn just 13 cards
    var z = x[suit][value]
    console.log(z)

    return z+suit
  }
