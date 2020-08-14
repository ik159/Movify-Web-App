import React from 'react'
import {Link} from 'react-router-dom';
import { Container , Row, Col } from 'reactstrap';
import logo from './images/ic_launcher.png';
function Nav() {


 const navStyle ={
            color : 'white',
         fontSize : 20,
 };






    return (
        <nav>
      
<Row >

<Col style ={{paddingLeft: 25 , paddingTop:10}}><img src={logo} className="logo" /></Col>
   
    <Col style = {{fontSize:25,fontWeight:'bold',padding : 30}}>Movify</Col>

    
    
    
    <Row className = 'nav-links'>
    <Link style = {navStyle} to ='/'>
    <li>HOME</li>
    </Link>
    <Link style = {navStyle} to ='/tvshows'>
    <li>TV SHOWS</li>
    </Link>
    <Link style = {navStyle} to ='/about'>
    <li>ABOUT APP</li>
    </Link>
</Row></Row>




        </nav>
    )
}

export default Nav
