import React, { Component } from 'react';
import Book from "./Book.js"


class Books extends Component {
  render() {
    return (
      <div className="Books">
      <div className="container">
        <h1>Book List by Title and Author</h1>
         <div className="list-group">


                {this.props.books.map(book =>(

                  <div className="list-group-item">
                   <div className="row">
                    <div className="col-md-12">
                      <Book
                      key={book.id}
                      book={book}
                      />
                    </div>
                  </div>

                </div>
                ))}

         </div>

       </div>
      </div>
    );
  }
}

export default Books;
