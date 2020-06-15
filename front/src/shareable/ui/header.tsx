import React, { FC, ReactElement } from 'react';

import { NavTours } from './nav-tours';
import { UserBar } from './user-bar';
import { UserData } from '../../user/types';

export const Header: FC<{ data: UserData }> = ({ data }): ReactElement => {
  return (
    <header className="header">

      <NavTours />

      <div className="header__logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo-white.png`} alt="Natours logo" />
      </div>
      
      <UserBar user={data} />
      
    </header>
  )
}

