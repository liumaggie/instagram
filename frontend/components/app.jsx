import React from 'react';
import NavBarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <NavBarContainer />
    { children }
  </div>
);

export default App;
