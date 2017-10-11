import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Accueil</Link></li>
            <li><Link to='/other'>Autre page</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
