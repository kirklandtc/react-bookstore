import React, { Component } from 'react';
import Book from "./Book.js"


class Books extends Component {
  render() {
    return (
  <div className="row">
    <div className="col-md-12">
      <div className="row">
       <div className="Books">
        <div className="container-fluid">
         <h1>Book List</h1>
          <div className="list-group">


                {this.props.books.map(book =>(

                  <div className="list-group-item">
                   <div className="row">
                    <div className="row">
                     <div className="col-lg-12">
                      <Book
                      key={book.id}
                      addToCart={this.props.addToCart}
                      book={book}/>
                    </div>
                   </div>
                 </div>

                 </div>
                ))}

            </div>

          </div>
        </div>
      </div>
     </div>
   </div>
    );
  }
}

export default Books;
