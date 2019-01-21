import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Books from "./components/Books"
import Cart from "./components/Cart"


class App extends Component {
state = {books:[],cartItems:[],inCart:[]}


async componentDidMount(){
 const response = await fetch("http://localhost:8082/api/books")
 const json = await response.json()
 console.log(json)
 this.setState({books:json},()=>{console.log(this.state)})
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

      <div class="container-fluid">


      <Books books={this.state.books}/>
      <Cart cartItems = {this.state.books}/>
      <cartItems cartItems = {this.state.books.inCart}/>


      </div>


      </div>
    );
  }
}

export default App;
