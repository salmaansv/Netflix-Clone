import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RoePost/RowPost';
import {orginals,action} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix orginals'/>
      <RowPost url={action} title='action' isSmall/>
      </div>
  );
}

export default App;
