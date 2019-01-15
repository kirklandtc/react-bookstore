import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Books from "./components/Books"

class App extends Component {
state = {books:[]}

componentDidMount = async () => {
 const response = await fetch("http://localhost:8082/api/books")
 const json = await response.json()
 console.log(json)
 this.setState({books:json},()=>{console.log(this.state);})
}
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Books books={this.state.books}/>
      </div>
    );
  }
}

export default App;
