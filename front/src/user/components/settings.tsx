 import React, { FC } from 'react';

 export const Settings: FC = () => {
   return (
    <main className="main">
      <div className="user-view">
        
        {/* Setting Sidebar */}
        <nav className="user-view__menu">
          <ul className="side-nav">
            <li className="side-nav--active">
              <a href="">
                <svg>
                  <use xlinkHref='img/icons.svg#icon-settings' />
                </svg>
                Settings
              </a>
            </li>
            <li>
              <a href="">
                <svg>
                  <use xlinkHref='img/icons.svg#icon-briefcase' />
                </svg>
                My bookings
              </a>
            </li>
            <li>
              <a href="">
                <svg>
                  <use xlinkHref='img/icons.svg#icon-star' />
                </svg>
                My reviews
              </a>
            </li>
            <li>
              <a href="">
                <svg>
                  <use xlinkHref='img/icons.svg#icon-credit-card' />
                </svg>
                Billing
              </a>
            </li>                              
          </ul>
        </nav>

        {/* Main Content */}
        <div className="user-view__content">
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
            <form className="form form-user-data">
              <div className="form__group">
                <label htmlFor="name" className="form__label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form__input" 
                  value="Jonas Schmedtmann" 
                  required 
                />
              </div>

              <div className="form__group">
                <label htmlFor="email" className="form__label">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form__input" 
                  value="admin@natours.io" 
                  required 
                />
              </div>

              <div className="form__group form__photo-upload">
                <img src="img/user.jpg" alt="User" className="form__user-photo" />
                <a className="btn-text">Choose new photo</a>
              </div>

              <div className="form__group right">
                <button className="btn btn--small btn--green">Save settings</button>
              </div>                           
            </form>

            <div className="line">&nbsp;</div>

            <div className="user-view__form-container">
              <h2 className="heading-secondary ma-bt-md">Password change</h2>
              <form className="form form-user-settings">
                <div className="form__group">
                  <label htmlFor="password-current" className="form__label">
                    Current password
                  </label>

                  <input 
                    type="password" 
                    id="password-current" 
                    className="form__input" 
                    placeholder="••••••••" 
                    minLength={8}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="password" className="form__label">
                    New password
                  </label>

                  <input 
                    type="password" 
                    id="password" 
                    className="form__input" 
                    placeholder="••••••••" 
                    minLength={8}
                  />
                </div>
                <div className="form__group ma-bt-lg">
                  <label htmlFor="password-confirm" className="form__label">
                    Confirm password
                  </label>

                  <input 
                    type="password" 
                    id="password-confirm" 
                    className="form__input" 
                    placeholder="••••••••" 
                    minLength={8}
                  />
                </div>                                 
                <div className="form__group right">
                  <button className="btn btn--small btn--green">
                    Save password
                  </button>
                </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </main>
   );
 }