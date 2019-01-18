import React, { Component } from 'react';

const Item = (props) => {
  return <div>

    TEST</div>
}
class AddItem extends Component {
  state = {
    books:[],cartItems:[]
}

onSubmit = (e)=> {
  e.preventDefault()
  this.props.addItemToState(this.state.quantity,
  this.state.productId)

}


render() {
  return (


    <form className="container" onSubmit={this.onSubmit}>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input type="number" className="form-control" id="quantity" min = "1" value={this.state.quantity}
        onChange={(e)=> this.setState({quantity: e.target.value})}/>

        <label htmlFor="product">Product</label>
        <select id="product" className="form-control"
         onChange={(e) => this.setState({productId: this.state.products.find(product => product.name === e.target.value)['id']})}>
          <option>Choose...</option>
          {this.props.products.map(product => <option key={product.id}>{product.name}</option>)}
        </select>

        <button type="submit" className="btn btn-primary">Submit</button>


      </div>
    </form>
  )
 }
}



export default Item;
