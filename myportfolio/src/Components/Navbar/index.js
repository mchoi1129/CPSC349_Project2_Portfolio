import React from 'react';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import style from './Navbar.module.css';

// Navigation bar with title, links to Home, About, Projects, and Contact
const Navbar = () => {
  return (
    <>
      <Nav>
        <h1 className={style.name}>
          Myoungji Choi
          <h2 className={style.job}>Software Developer</h2>
        </h1>

        <NavMenu>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <div className={style.dropdown}>
            <button className={style.dropbtn}>Projects</button>
            <div className={style.dropdownContent}>
              <NavLink to='/project1'>
                Project 1
              </NavLink>
              <NavLink to='/project2'>
                Project 2
              </NavLink>
              <NavLink to='/project3'>
                Project 3
              </NavLink>
            </div>
          </div>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;