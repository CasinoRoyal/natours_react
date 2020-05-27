import React, { FC } from 'react';

import { useForm } from '../../shareable/hooks/useForm';
import { validator } from '../../shareable/utils/generateFormOptions';

export const AuthForm:FC<{isSignup: boolean}> = ({ isSignup }) => {
  const stateSchema = {
    username: '',
    email: '',
    password: '',
    confirm: ''
  };

  const validateSchema = {
    username: {
      required: true,
      error: 'Please, provide your username',
      validator
    },
    email: {
      required: true,
      error: 'Please, provide your email',
      validator
    },
    password: {
      required: true,
      error: 'Password is required',
      validator
    },
    confirm: {
      required: true,
      error: 'Confirm password is required',
      validator
    }
  };

  const onSubmitCallback = () => {}

  type StateType = typeof stateSchema;
  type ValidateType = typeof validateSchema;

  if (!isSignup) {
    delete stateSchema.username;
    delete stateSchema.confirm;
    delete validateSchema.username;
    delete validateSchema.confirm;
  };

  const { 
    form, 
    handleChange, 
    handleSubmit,
    errorForm
    
  } = useForm<StateType, ValidateType, typeof onSubmitCallback>(stateSchema, validateSchema, onSubmitCallback);

  return (
    <form className="form form--login" onSubmit={handleSubmit}>

    {isSignup && (
        <div className="form__group">
          <label htmlFor="username" className="form__label">
            Username
          </label> 

          <input 
            type="text"
            name="username"
            id="username" 
            className="form__input"
            placeholder="Username"
            required
            onChange={handleChange}
          />
        </div>
      )}
      
      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email address 
        </label>

        <input 
          type="email"
          name="email"
          id="email" 
          className="form__input"
          placeholder="you@example.com"
          required
          onChange={handleChange}
         />
      </div>
      
      <div className="form__group ma-bt-md">
        <label htmlFor="password" className="form__label">
          Password 
        </label> 

        <input 
          type="password" 
          name="password"
          id="password" 
          className="form__input"
          placeholder="••••••••"
          minLength={8}
          required
          onChange={handleChange}
        />
      </div>

      {isSignup && (
        <div className="form__group ma-bt-md">
          <label htmlFor="confirm" className="form__label">
            Confirm password
          </label> 

          <input 
            type="password"
            name="confirm"
            id="confirm" 
            className="form__input"
            placeholder="••••••••"
            minLength={8}
            required
            onChange={handleChange}
          />
        </div>
      )}
      
      <div className="form__group">
        <button className="btn btn--green" disabled={errorForm.error}>
          {isSignup ? 'Sign up' : 'Login'}
        </button> 
      </div>

    </form> 
  );
};