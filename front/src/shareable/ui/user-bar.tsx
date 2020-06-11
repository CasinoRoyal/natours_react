import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../../user/hooks/use-user';

export const UserBar: FC = (): ReactElement => {
  const { data } = useUser();

  const renderTemplate = data ? (
      <>        
        <button className="nav__el nav__el--logout">
          Logout
        </button>

        <Link to="/profile" className="nav__el">
          <img src={`img/users/${data.photo}`} alt="User" className="nav__user-img" />
          <span>{data.name}</span>
        </Link>
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


// <Link to="/booking" className="nav__el">My bookings</Link>