import React, { Component } from 'react';
import RouterIndex from './router/index'
import CommHeader from './view/comm/comm-header';
import CommFooter from './view/comm/comm-footer';
import './view/index.css';
class App extends Component {
  render() {
    return (
      <div className='pageWrap'>
        <CommHeader/>
        <div className='main'>
          <RouterIndex/>  
        </div>
        <CommFooter/>
      </div>
    );
  }
}
export default App;
