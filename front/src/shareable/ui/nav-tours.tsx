import React, { FC, ReactElement } from 'react';

export const NavTours: FC = (): ReactElement => {
  return (
    <nav className="nav nav--tours">
      <a href="/" className="nav__el">All tours</a>
      <form className="nav__search">
        <button className="nav__search-btn">
          <svg>
            <use href="img/icons.svg#icon-search" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search tours"
          className="nav__search-input"
        />
      </form>
    </nav>
  );
}