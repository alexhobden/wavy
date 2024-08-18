import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kasten from './components/kasten';
import './fonts.css';
import ModelViewer from './components/modelViewer';

function App() {
  return (
    <div className='App'>
      {/* <Kasten>
        <video width="320" height="480" autoPlay muted loop >
          <source src="/videos/wavy.mp4" type="video/mp4" />
        </video>
      </Kasten> */}
      <Kasten>
      </Kasten>
    </div>
  );
}

export default App;
