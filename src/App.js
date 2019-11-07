import React, { Component } from 'react';
import './App.css';
import Nyhetslista from './Components/Nyhetslista';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: [{urlToImage:"https://source.unsplash.com/random/200x125/?space"}, {https:"//newsapi.org/v2/top-headlines?country=se&category=science&apiKey=c0de5da526d940ed9ae03cc4148dcdba"}],
    title:"Dagens Nyheter",
    description:"Senaste nyheterna för idag"
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=se&category=science&apiKey=c0de5da526d940ed9ae03cc4148dcdba')
    .then(function (response) {
      return response.json()})
    .then(
      jsondata => {
        this.setState({articles: jsondata.articles });
      }
    )
    .catch( error => {
      this.setState({
        articles:[{
          urlToImage: "fel",
          titel: "något gick fel",
          description: "Något gick fel",
        }]
      });
    });
}
  render() {
    return (
      <Nyhetslista artikellista={this.state.articles} />
    );
  }
}

export default App;
