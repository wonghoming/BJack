import React from 'react'
import {createDeck} from '../objects/deck.js'
import {getCard} from './testCard.js'
export default class extends React.Component{
  render(){
    var playedCard = []
    var deck = createDeck(2) //maybe change the argument to parse the number of decks created into getCard as well
    var firstCard = getCard(deck) //in order to random the whole deck, rather than just 13 cards
    var secondCard = getCard(deck)
    playedCard.push(firstCard, secondCard)
    console.log(playedCard)
    return (
        <div>{firstCard + " " + secondCard}</div>
      )

}
}
