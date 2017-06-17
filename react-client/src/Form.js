import React, { Component } from 'react'

class Form extends Component {
  handleSubmit = () => {
    console.log('handleSubmit....')
    let content = this.textInput.value
    this.props.publishPost({ content })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input ref={value => this.textInput = value} type="text" />
        <input value={this.props.label} type="submit" />
      </form>
    )
  }
}

export default Form
