import React, { Component } from 'react'
import '../css/form.css'
import { Link } from 'react-router-dom'

class Form extends Component {
  handleSubmit = () => {
    console.log('handleSubmit....')
    let content = this.textInput.value
    this.props.publishPost({ content })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>分类</label>
          <input
            ref={(input) => this.category = input }/>
        </div>
        <div>
          <label>标题</label>
          <input
            ref={(input) => this.title = input }/>
        </div>
        <div>
          <label>内容</label>
          <textarea
            ref={(input) => this.content = input } rows='20'  />
        </div>
        <div className="actions">
          <button  type='submit'>{this.props.label}</button>
          <Link className="link" to='/'>取消</Link>
        </div>
      </form>
    )
  }
}

export default Form
