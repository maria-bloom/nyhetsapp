import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './Components/Nyhetslista';
import data from './fuskdata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: [{urlToImage:"https://source.unsplash.com/random/200x125/?space"}, {https://newsapi.org/v2/top-headlines?country=se&category=science&apiKey=c0de5da526d940ed9ae03cc4148dcdba}]};
    title:"Ny teknik",
    description:"Senaste monstergalaxen",
  },

componentDidMount() {
  fetch(https://newsapi.org/v2/top-headlines?country=se&category=science&apiKey=c0de5da526d940ed9ae03cc4148dcdba).then(responce){
  .then(function (responce) {  
  //
    return response.json()
    ).then( jsondata => {
      //
      this.setState({articles: jsondata.articles })
    })
  }
}

  render() {
    return (
<Nyhetslista artikellista={this.state.articles} />
    );
}
}
export default App;
