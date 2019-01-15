import React, { Component } from 'react';
import Item from "./Item.js"


class Books extends Component {
  render() {
    return (
      <div className="Books">
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>

          {this.props.Books.books.map(book => <Item
          key={book.id}
          name={book.product.name}
          priceInCents={book.product.priceInCents}
          quantity={book.quantity}
          />)}

        </div>
        <div>Total (props.cartItemsList.reduce())</div>
      </div>
      </div>
    );
  }
}

export default Books;
