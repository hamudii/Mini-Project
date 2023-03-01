import React from 'react';
import './Home.css';
import Header from '../Components/Header.js';

class Home extends React.Component {
    render(){
        return(
          <div class="wrapper">
        
              <div class="profile">
                  <div class="overlay">
                      <div class="about d-flex flex-column">
                          <h4 className='text-center'>Mohammad Sulaeman</h4> 
                      </div>
                      <div class="about d-flex flex-column">
                          <h4 className='text-center'>Computer Science Student</h4>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default Home;