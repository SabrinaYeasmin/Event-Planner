import React, {Fragment} from 'react';
import './App.css';

// components
import InputEvent from './Components/InputEvent';
import ListEvent from './Components/ListEvent';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputEvent />
        <ListEvent />
      </div>
    </Fragment>
  )
}


export default App;
