import "./Home.css"
import React from 'react';
import { Button } from "./Button";


const Home = () => {
  return (
      <div className='home-container'>
        <image src='./images/background.jpg' />
        <h1>Book store</h1>
        <p>
          Books have allowed me to travel way more than my passport.
        </p>     
        <div className="home-Btns">
          <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Find Books
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            About Us
          </Button>
        </div>
      </div>
  )
}

export default Home;
