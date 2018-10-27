import React from 'react'
import {createDeck}from '../objects/deck.js'
export default class extends React.Component{
  render(){
    console.log(createDeck(5))
    return <div>this is a test</div>
  }
} 



