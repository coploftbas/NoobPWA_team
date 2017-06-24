import React, { Component } from 'react';

import Header from './components/Header.react';
import Dashboard from './pages/Dashboard.react';
import Footer from './components/Footer.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Dashboard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
