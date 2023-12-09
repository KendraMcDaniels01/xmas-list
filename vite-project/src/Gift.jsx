import React from 'react';

class Gift extends React.Component{
  render() {
    return (
      <article>
        <h3>gift {this.props.name}</h3>
        <img>{this.props.img}</img>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
      </article>
    )
  }
}

export default Gift;