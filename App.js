import logo from './logo.svg';
import './App.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';

function App() {
  return (
    <>
      <div className='body'>
        <Title/>
        <Link to='/game' className="start">
          <Button variant="primary" className="btn-primary w-100">Start</Button>
        </Link>
        
          
        
          
       
      </div>
    </>
  );
}

export default App;
