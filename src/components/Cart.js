import React, { Component } from 'react';

import Book from "./Book.js"


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


      <div className="Cart">
       <div className="container">
        <h1>Cart Items</h1>
          <div className="list-group">




            {this.props.cartItems.filter(book=> book.inCart === true).map(book => (
                  <div className="list-group-item">
                  <div className="row">
                  <div className="col-md-8">

                      <Book
                      key={book.id}
                    book = {book}
                  />
                </div>
              </div>
            </div>
            ))}
         </div>
       </div>
      </div>
    )
  }
}
export default Cart;
