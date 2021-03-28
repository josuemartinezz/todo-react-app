import React, { Component } from 'react'

class AppInput extends Component {

  componentDidMount() {
    console.log("Carga de mi componente")
  }

  render() {
    return (
      <div className="container-input">
        <input type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} />
      </div>
    )
  }

}

export default AppInput;