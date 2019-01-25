import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.book.title}</th>
        <td>{this.props.book.quantity}</td>
        <td>${(this.props.book.price * this.props.book.quantity).toFixed(2)}</td>
      </tr>    
    );
  }
}

export default Item;
