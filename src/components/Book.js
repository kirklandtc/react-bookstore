import React, { Component } from 'react';


class Book extends Component {
  render() {
    return (
      <div className="Book">
        {this.props.book.title+"    "}
        {this.props.book.author}
      </div>
    );
  }
}

export default Book;
