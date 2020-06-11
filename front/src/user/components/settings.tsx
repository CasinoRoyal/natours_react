import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { updateUserDataAsync } from '../actions';
import { useUser } from '../hooks/use-user';
import { useFetchSubmit } from '../hooks/use-fecth-submit'
import { User } from '../types';
import { userDataSchema, userChangePasswordSchema } from '../utils/schemas';

type ChangeDataType = {
  name: string;
  email: string;
}

function compare<T> (values: T, comparedValues: T): boolean { 
  return JSON.stringify(values) !== JSON.stringify(comparedValues); 
}

export const Settings: FC = () => {
  const { data } = useUser();
  const { fetch } = useFetchSubmit<ChangeDataType>(updateUserDataAsync);
  
  const { register, handleSubmit, errors, reset } = useForm<ChangeDataType>({
    defaultValues: {
      name: '',
      email: ''
    },
    validationSchema: userDataSchema
  });

  const { 
      register: passwordRegister, 
      handleSubmit: passwordSubmit, 
      errors: passwordErrors 
  } = useForm({
    validationSchema: userDataSchema
  });

  useEffect(() => {
    if (!data) return;

    reset({name: data.name, email: data.email});
  }, [reset, data]);

  const handlerUserDataSubmit = (newData: any): void => {
    if (!data) return;

    const { name, email } = data;
    const isChange = compare<ChangeDataType>(newData, {name, email});

    if (!isChange) {
      console.log('data was not changed');
      return;
    }
    console.log('hello', data, isChange);
    fetch(newData);
  }

  const handlerPasswordSubmit = (data: any) => {
    console.log(data);
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
            
            <form 
              className="form form-user-data" 
              onSubmit={handleSubmit(handlerUserDataSubmit)}
            >
              <div className="form__group">
                <label htmlFor="name" className="form__label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form__input" 
                  required 
                  name='name'
                  ref={register}
                />
              </div>

              <div className="form__group">
                <label htmlFor="email" className="form__label">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form__input" 
                  required 
                  name='email'
                  ref={register}
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
                    name='currentPassword'
                    ref={passwordRegister}
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
                    name='newPassword'
                    ref={passwordRegister}
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
                    name='passwordConfirm'
                    ref={passwordRegister}
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