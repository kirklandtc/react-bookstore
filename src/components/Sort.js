import React, { Component } from 'react';
class Sort extends Component {
  render(){
    return (


<div className="container-fluid">
  <h1>Sort Books Below by Title or Author</h1>
  <div className = "col-md-6">
    <div className = "form-group">
      <form onSubmit>
        <label>Book:</label>
          <select id = "productIddd" className = "form-control"
            name="productID" onChange={(e)=>{this.props.sortBy(e.target.value)}}>
            <option value="id">Sort By Id</option>
              <option value="title">Sort By Book Title</option>
              <option value="author">Sort By Author</option>
              </select>
           </form>
         </div>
       </div>
     </div>
 );
}
}



export default Sort
