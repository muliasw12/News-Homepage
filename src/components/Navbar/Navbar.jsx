import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/images/logo.svg'
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#new">New</a></p>
    <p><a href="#popular">Popular</a></p>
    <p><a href="#trending">Trending</a></p>
    <p><a href="#categories">Categories</a></p>
    </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="news__navbar">
      <div className="news__navbar-links_logo">
            <img src={logo} alt="logo"/>
      </div>  
      <div className="news__navbar-links">
        
        <div className="news__navbar-links_container">
            <Menu/>
        </div>
      </div> 
      <div className="news__navbar-menu">
        {toggleMenu
            ? <RiCloseLine color="#040C18" size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color="#040C18" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
            <div className="news__navbar-menu_container scale-up-center">
              <div className="news__navbar-menu_container-links">
                <Menu/>
              </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
