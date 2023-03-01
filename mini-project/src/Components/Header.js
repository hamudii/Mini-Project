import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from '../Views/About';
import './Header.css'
class Header extends React.Component{
    render(){
      return (<ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="<About/>">About</a></li>
      </ul>
        

      );
    }
  }
export default Header;