import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';

import { useUser } from '../hooks/use-user';
import { User } from '../types';
import { api } from '../../http/api';

type StateUserType = {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

type ChangesDataType = {
  name?: string;
  email?: string;
}

export const Settings: FC = () => {
  const initialState = {
    name: '', 
    email: '', 
    currentPassword: '', 
    newPassword: '', 
    confirmPassword: ''
  };
  const [userData, setUserData] = useState<StateUserType>(initialState);
  const data = useUser();

  useEffect(() => {
    if (!data) return;

    setUserData((prevState) => ({
      ...prevState,
      ...data
    }));
  }, [data]);

  const compareData = (keys: Array<keyof ChangesDataType>) => {
    const results = keys.filter(key => {
      return userData[key] !==data![key]
    });

    return results;
  }

  const handlerInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handlerUserDataSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const modifiedKeys = compareData(['name', 'email']);
    const modifiedData: ChangesDataType = {};

    modifiedKeys.forEach(key => {
      return modifiedData[key] = userData[key]
    });

    const options = {
      method: 'PATCH',
      endPoint: 'users/change-user-data',
      data: {...modifiedData}
    };

    try {
      const res = await api.request<User>(options);
      const newData = modifiedKeys.map(key => res[key])
      
      setUserData(prevState => ({
        ...prevState,
        ...newData
      }));
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <main className="main">
      <div className="user-view">
        
        {/* Setting Sidebar */}
        <nav className="user-view__menu">
          <ul className="side-nav">
            <li className="side-nav--active">
              <a href="/nowhere">
                <svg>
                  <use xlinkHref='img/icons.svg#icon-settings' />
                </svg>
                Settings
              </a>
            </li>
            <li>
              <a href="/nowhere">
                <svg>
                  <use xlinkHref='img/icons.svg#icon-briefcase' />
                </svg>
                My bookings
              </a>
            </li>
            <li>
              <a href="/nowhere">
                <svg>
                  <use xlinkHref='img/icons.svg#icon-star' />
                </svg>
                My reviews
              </a>
            </li>
            <li>
              <a href="/nowhere">
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
            <form className="form form-user-data" onSubmit={handlerUserDataSubmit}>
              <div className="form__group">
                <label htmlFor="name" className="form__label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form__input" 
                  value={userData.name} 
                  required 
                  onChange={handlerInput}
                  name='name'
                />
              </div>

              <div className="form__group">
                <label htmlFor="email" className="form__label">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form__input" 
                  value={userData.email} 
                  required 
                  onChange={handlerInput}
                  name='email'
                />
              </div>

              <div className="form__group form__photo-upload">
                <img src={`img/users/${data?.photo}`} alt="User" className="form__user-photo" />
                <a className="btn-text">Choose new photo</a>
              </div>

              <div className="form__group right">
                <button type="submit" className="btn btn--small btn--green">
                  Save settings
                </button>
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
                    value={userData.currentPassword}
                    onChange={handlerInput}
                    name='currentPassword'
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
                    value={userData.newPassword}
                    onChange={handlerInput}
                    name='newPassword'
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
                    value={userData.confirmPassword}
                    onChange={handlerInput}
                    name='confirmPassword'
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