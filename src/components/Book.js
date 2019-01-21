import React, { Component } from 'react';
import Books from "./Books.js"

class Book extends Component {
  render() {
    return (
      <div className="Book">
        {this.props.book.title+"    "}
        {this.props.book.author+"   "}
        ${this.props.book.price.toFixed(2)+"    "}<button type="button" className="cartAdd"
        onClick={(e) =>this.props.inCart(this,this.props.book.id)
          (e)}>Add to Cart</button>
      </div>
    );
  }
}

export default Book;
