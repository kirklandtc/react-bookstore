import React, { Component } from 'react';

import Item from "./Item.js"


const inCart = (list) => {
  let total = list.reduce((sum, i) =>{
    sum += (i.product.priceInCents * i.quantity)/100
    return sum
  },0).toFixed(2)
  return `$${total}`

}

class Cart extends Component {
  render() {

    return (
      <div>
        <h1>Cart Items</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartItems.filter(book=> book.inCart === true).map(book => (
              <Item
                key={book.id}
                book = {book}
              />
            ))}
          </tbody>
        </table>
    </div>
      )
  }
}
export default Cart;
