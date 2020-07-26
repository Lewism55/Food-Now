import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Yelp from '../../util/Yelp.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
    this.loader = this.loader.bind(this);
    this.endLoader = this.endLoader.bind(this);
  }

  async searchYelp(term, location, sortBy) {
    this.loader();
    await Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({businesses: businesses});
    });
     this.endLoader();
  }

  loader() {
    var element = document.getElementById("Loading");
    element.classList.remove("loaderEnd");
    element.classList.add("loaderStart");
    element.classList.add("lds-facebook");
  }

  endLoader() {
    var element = document.getElementById("Loading");
    element.classList.remove("loaderStart"); 
    element.classList.remove("lds-facebook"); 
    element.classList.add("loaderEnd");
  }

  render() {
    return (
      <div className="App">
        <h1>Food Now</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <div id="Loading" className="loaderEnd">
          <div></div><div></div><div></div>
        </div>
        <h2 className="subtitle1">Results:</h2>
        <BusinessList businesses={this.state.businesses} /> 
      </div>
    );
  }
};

export default App;
