import React, { Component } from 'react';
import RouterIndex from './router/index'
import 'antd/dist/antd.css';

import Header from './components/header/index'
import Footer from './components/footer/index'

class App extends Component {
  render() {
    return (
      <div className="wrapPage">
        <Header/>
        <main className="main">
          <RouterIndex />
        </main>
        <Footer/>
      </div> 
    );
  }
}

export default App;
