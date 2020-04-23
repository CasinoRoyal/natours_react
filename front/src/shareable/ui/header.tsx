import React, { FC, ReactElement } from 'react';

import { NavTours } from './nav-tours';
import { UserBar } from './user-bar';

export const Header: FC = (): ReactElement => {
  return (
    <header className="header">

      <NavTours />

      <div className="header__logo">
        <img src="img/logo-white.png" alt="Natours logo" />
      </div>
      
      <UserBar />
      
    </header>
  )
}