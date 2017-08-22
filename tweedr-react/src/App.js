import React, { Component } from 'react';
import axios from 'axios';

// components
import Header from './components/Header';
import Input from './components/Input';
import TweedrFeed from './components/TweedrFeed';

// css
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allPosts: [] };
  }

  componentDidMount() {
     axios.get("https://tweedrapp.herokuapp.com/tweeds/get")
     .then(tweeds => {
       this.setState({ allPosts: tweeds.data.tweeds });
     });
  }

  updatePosts = (posts) => {
    this.setState({ allPosts: posts });
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Input 
            updatePosts={this.updatePosts}
          />
          <TweedrFeed 
            allTweeds={this.state.allPosts}
          />
      </div>
    );
  }
}