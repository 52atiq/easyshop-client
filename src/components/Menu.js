import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Menu = () => {
    

    return (
        <nav className='navbar navbar-dark bg-dark'>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-link'>Login</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/register' className='nav-link'>Register</Link>
                </li>

            </ul>
                      
        </nav>

      //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <div class="container-fluid">
      //     <a class="navbar-brand" href="#">Navbar</a>
      //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      //       <div class="navbar-nav">
      //         <a class="nav-link active" aria-current="page" href="#">Home</a>
      //         <a class="nav-link" href="#">Features</a>
      //         <a class="nav-link" href="#">Pricing</a>
      //         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    );
};

export default Menu;