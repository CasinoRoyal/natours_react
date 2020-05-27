import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUserAsync } from '../actions';
import { selectUserData } from '../selectors';
import { UserData, AuthFormData } from '../types';
import { ReducerStateType } from '../../shareable/types';
import { AppStore } from '../../store/store';

export const useRegistration = (methodAuth:string, userData:AuthFormData): ReducerStateType<UserData> => {
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    error
  } = useSelector<AppStore, ReducerStateType<UserData>>(selectUserData);

  useEffect(() => {
    dispatch(fetchUserAsync(methodAuth, userData));
  }, [dispatch]);

  return {
    data,
    isFetching,
    error
  };
};