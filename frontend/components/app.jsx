import React from 'react';
import NavBarContainer from './navbar/navbar_container';

const App = ({ children }) => {
  return(
    <div>
      <NavBarContainer />
      { children }
    </div>
  );
};

export default App;
