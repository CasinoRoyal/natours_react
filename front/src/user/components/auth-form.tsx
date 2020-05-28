import React, { FC } from 'react';

import { 
  createStateSchema, 
  createValidateSchema,
  StateSchemaType,
  ValidateSchemaType
} from '../utils/create-schemas';
import { useForm } from '../../shareable/hooks/useForm';
import {useAuth} from '../hooks/use-auth';

export const AuthForm:FC<{isSignup: boolean}> = ({ isSignup }) => {
  const method = isSignup ? 'signup' : 'login';
  const {fetch} = useAuth(method)
  
  const stateSchema = createStateSchema(isSignup);
  const validateSchema = createValidateSchema(isSignup);

  const formMethods = useForm<StateSchemaType, ValidateSchemaType, typeof fetch>(
    stateSchema, 
    validateSchema, 
    fetch
  );

  const { 
    form, 
    handleChange, 
    handleSubmit,
    errorForm
  } = formMethods;

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
          <label htmlFor="passwordConfirm" className="form__label">
            Confirm password
          </label> 

          <input 
            type="password"
            name="passwordConfirm"
            id="passwordConfirm" 
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