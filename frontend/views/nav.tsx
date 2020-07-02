import React, { FunctionComponent } from 'react';

type NavViewProps = { }

export const NavView: FunctionComponent<NavViewProps> = () => 
<nav className="navbar">
  <div className="container">
    <div className="navbar-brand">
      <span className="navbar-burger burger" data-target="navbarMenuHeroA">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div id="navbarMenuHeroA" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item is-active">
          Home
        </a>
        <a className="navbar-item">
          Two
        </a>
        <a className="navbar-item">
          Three
        </a>
      </div>
    </div>
  </div>
</nav>