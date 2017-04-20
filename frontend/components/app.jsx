import React from 'react';
// import HomeContainer from './home/home_container';
import NavBarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <NavBarContainer />
    { children }
  </div>
);

export default App;
