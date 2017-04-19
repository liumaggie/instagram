import React from 'react';
import HomeContainer from './home/home_container'

const App = ({ children }) => (
  <div>
    <h1>Instapups</h1>
    <HomeContainer />
    { children }
  </div>
);

export default App;
