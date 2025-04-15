import React, { Component } from 'react'
import Hello from './hello'

export class App extends Component {
  render() {
    let a = "kunj"
    let b = "gami"
    return (
      <>
        <Hello name={a} surname={b}/>
      </>
    )
  }
}

export default App
