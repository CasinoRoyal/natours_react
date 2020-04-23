import React, { FC, ReactElement } from 'react';

export const UserBar: FC = (): ReactElement => {
  return (
    <nav className="nav nav--user">
      <a href="/" className="nav__el">My bookings</a>
      
      <a href="/" className="nav__el">
        <img src="img/users/user-15.jpg" alt="User" className="nav__user-img" />
        <span>Jonas</span>
      </a>

{
 //      <button className="nav__el">Log in</button>
 //     <button className="nav__el nav__el--cta">Sign up</button>
}
    </nav>
  )
}