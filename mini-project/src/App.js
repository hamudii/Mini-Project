// eslint-disable-next-line
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home';
import About from './Views/About'

class App extends React.Component{
  render(){
    return (
      <div className="relative pb-10 min-h-screen">
      <Router>
      {/* <Header /> */}
        <Home />
        {/* 

        <div className="p-3">
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Routes>
        </div>

        */}
        <Footer />
      </Router> 
    </div>
    );
  }
}


export default App;
