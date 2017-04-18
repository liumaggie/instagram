import React from 'react';

const App = ({ children }) => (
  <div>
    <h1>Instapups</h1>
    <HomeContainer />
    { children }
  </div>
);

export default App;
