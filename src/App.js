import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Books from "./components/Books"
import Cart from "./components/Cart"


class App extends Component {
state = {books:[],cartItems:[]}


async componentDidMount(){
 const response = await fetch("http://localhost:8082/api/books")
 const json = await response.json()
 console.log(json)
 this.setState({books:json},()=>{console.log(this.state)})

}

addToCart(book){


  const idx = this.state.cartItems.findIndex(elem => elem.id === book.id)
  if(idx > -1){
    let newCart=Array.from(this.state.cartItems)
    newCart[idx].quantity++//incrementing to nan
    newCart[idx].inCart = true
    this.setState({
      ...this.state,
      cartItems:[...this.state.cartItems.slice(0,idx),newCart[idx],...this.state.cartItems.slice(idx+1)]
    })
  }  else {
    book.quantity = 1
    book.inCart = true
    let newState = {...this.state,cartItems:[...this.state.cartItems,book]}
    this.setState(newState,()=>{console.log(this.state)})
  }
}


  render() {



    return(
      <div className="App">
      <Navbar/>

        <div class="input-group flex-nowrap">
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">@</span>
          </div>
          <input type="text" class="form-control"
            placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>


      <div class="container">


      <Books addToCart={this.addToCart.bind(this)} books={this.state.books} />

      <Cart cartItems = {this.state.cartItems}/>

      <cartItems cartItems = {this.state.books.inCart}/>
      <addToCart cartItems ={this.state.books.inCart}/>

      </div>


      </div>
    );
  }
}

export default App;
