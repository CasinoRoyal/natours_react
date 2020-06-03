import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const UserBar: FC = (): ReactElement => {
  const login = false;

  const renderTemplate = login ? (
      <>
        <Link to="/" className="nav__el">My bookings</Link>
        
        <Link to="/" className="nav__el">
          <img src="img/users/user-15.jpg" alt="User" className="nav__user-img" />
          <span>Jonas</span>
        </Link>
      </>
    ) : (
      <>
        <Link to={`/auth/login`} className="nav__el">Log in</Link>
        <Link to={`/auth/signup`} className="nav__el nav__el--cta">Sign up</Link>
        <Link to={`/secret`} className="nav__el nav__el--cta">Go secret!</Link>
      </>
     );

  return (
    <nav className="nav nav--user">
      {renderTemplate}
    </nav>
  );
}