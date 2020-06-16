import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthStateSelector } from '../selector';
import { checkAuthTokenAsync } from '../actions';

export const useAuth = () => {
  const dispatch = useDispatch();

  const { isRequested, isAuth, isFetching, error } = useSelector(AuthStateSelector);

  useEffect(() => {
    if (isRequested) {
      return;
    }

    dispatch(checkAuthTokenAsync())
  }, [isRequested, dispatch]);

  return { 
    isRequested, 
    isAuth, 
    isFetching, 
    error 
  };
}