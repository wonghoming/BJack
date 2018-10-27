const createDeck = (deckAmount) => {
  const suits = ['spade','club', 'heart', 'diamond']
  const deck = {}
  const cardNumber = () => {
    const cards = []
    for (let i = 0 ; i < 13; i++){
      cards[i] = i+1
    }
    return cards
  }

  for(let i = 0; i < suits.length; i++){
    deck[suits[i]] = []
    const fullDeck = []
    for(let j = 0; j < deckAmount;j++){
        fullDeck.push(cardNumber())
    }
    deck[suits[i]] = fullDeck.reduce((a,b) => {
      return a.concat(b)
    })
  }
  return deck
}
export {createDeck}
