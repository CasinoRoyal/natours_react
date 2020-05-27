import { useState } from 'react';

// import { useRegistration } from './use-registration';
import { AuthFormData } from '../types';

export const useAuth = () => {
  const [isFetch, setIsFetch] = useState(false);
  const [isError, setIsError] = useState(false);

  const setAuthState = (isFetching:boolean, error:boolean): void => {
    if (isFetching) { 
      setIsFetch(true);
      setIsError(false);
    };

    if (error) {
      setIsFetch(false);
      setIsError(true); 
    }
  };
  
  const login = (dataForm: AuthFormData): void => {
    // const {isFetching, error} = useRegistration('login', dataForm);
    // setAuthState(isFetching, error);
  };

  const signup = (dataForm: AuthFormData): void => {
    // const {isFetching, error} = useRegistration('signup', dataForm);
    // setAuthState(isFetching, error);
  };

  const logout = (): void => {};

  return {
    login,
    logout,
    signup,
    isFetch,
    isError
  };   
};