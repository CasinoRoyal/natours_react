import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../../user/hooks/use-user';

export const UserBar: FC = (): ReactElement => {
  const user = useUser();

  const renderTemplate = user ? (
      <>
        <Link to="/booking" className="nav__el">My bookings</Link>
        
        <Link to="/profile" className="nav__el">
          <img src="img/users/user-15.jpg" alt="User" className="nav__user-img" />
          <span>Jonas</span>
        </Link>
        <button>Logout</button>
        <Link to={`/secret`} className="nav__el nav__el--cta">Go secret!</Link>
      </>
    ) : (
      <>
        <Link to={`/auth/login`} className="nav__el">Log in</Link>
        <Link to={`/auth/signup`} className="nav__el nav__el--cta">Sign up</Link>
      </>
     );

  return (
    <nav className="nav nav--user">
      {renderTemplate}
    </nav>
  );
}