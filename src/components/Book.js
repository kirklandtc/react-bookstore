import React, { Component } from 'react';


class Book extends Component {
  render() {
    return (
      <div className="Book">
        {this.props.book.title+"    "}
        {this.props.book.author+"   "}
        ${this.props.book.price.toFixed(2)+"    "}
        <button type="button" className= "cartAdd" id ={this.props.book.id}
        onClick={(e)=>{this.props.addToCart(this.props.book)}}>Add to Cart</button>
      </div>
    );
  }
}

export default Book;
