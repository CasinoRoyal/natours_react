import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { UserData } from '../../user/types';
import { fetchLogoutAsync } from '../../auth/actions';
import { useFetchSubmit } from '../../auth/hooks/use-fecth-submit';

export const UserBar: FC<{ user: UserData }> = ({ user }): ReactElement => {
  const { fetch } = useFetchSubmit(fetchLogoutAsync);

  const renderTemplate = user ? (
      <>        
        <button onClick={fetch} className="nav__el nav__el--logout">
          Logout
        </button>

        <Link to="/profile" className="nav__el">
          <img src={`img/users/${user.photo}`} alt="User" className="nav__user-img" />
          <span>{user.name}</span>
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
