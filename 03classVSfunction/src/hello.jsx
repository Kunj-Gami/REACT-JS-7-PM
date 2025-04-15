import React, { Component } from 'react'

export class Hello extends Component {
  render() {
    const {name,surname} = this.props
    return (
      <>
        <h1>{name}</h1>
        <h1>{surname}</h1>
      </>
    )
  }
}

export default Hello
