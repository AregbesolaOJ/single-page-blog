import React, { Component } from 'react';
import './App.css';
// import { Provider } from '../../Context';
import Blog from '../Blog/Blog';
import Footer from '../../components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import PostData from '../../components/PostData';

class App extends Component {
  state = {
    results: [...PostData]         
  }

  render () {
    return (
      // <Provider value={this.state.results}>
        <BrowserRouter>
          <div className="App">
            <Blog />
            <Footer />
          </div>
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;