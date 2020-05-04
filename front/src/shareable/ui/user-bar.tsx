import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const UserBar: FC = (): ReactElement => {
  return (
    <nav className="nav nav--user">
      <Link to="/" className="nav__el">My bookings</Link>
      
      <Link to="/" className="nav__el">
        <img src="img/users/user-15.jpg" alt="User" className="nav__user-img" />
        <span>Jonas</span>
      </Link>

{
 //      <button className="nav__el">Log in</button>
 //     <button className="nav__el nav__el--cta">Sign up</button>
}
    </nav>
  )
}