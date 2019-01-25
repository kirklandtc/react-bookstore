import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Books from "./components/Books"
import Cart from "./components/Cart"
import Sort from "./components/Sort"

class App extends Component {
state = {books:[],cartItems:[],sortBy:"id"}


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


sortBy(value){
  let copy = this.state.books.slice(0)
  if(value === "author"){ copy.sort((a,b) => {
    return a.author.toLowerCase() > b.author.toLowerCase()
     ? 1 : a.author.toLowerCase() < b.author.toLowerCase() ? -1 : 0
  })}
  if(value === "title"){ copy.sort((a,b) => {
   return a.title.toLowerCase() > b.title.toLowerCase()
   ? 1 : a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 0
  })}
  if(value === "id"){
    copy.sort((a,b)=>a.id-b.id)
  }
  let newState = {...this.state,books:copy}
  this.setState(newState)
}

// Adding JS content above to filter books by author and title

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

      <Sort sortBy={this.sortBy.bind(this)}/>

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
