import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUserAsync } from '../actions';
import { selectUserData } from '../selectors';
import { UserData, AuthFormData } from '../types';
import { ReducerStateType } from '../../store/types';
import { AppStore } from '../../store/store';

type StateFetchDataType = {
  data: AuthFormData | null;
  fetch: boolean;
};

type ReturnAuthType = ReducerStateType<UserData> & { fetch: (data: AuthFormData) => void };

export const useAuth = (methodAuth:string): ReturnAuthType  => {
  const [doFetch, setDoFetch] = useState<StateFetchDataType>({ data: null, fetch: false });
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    error
  } = useSelector<AppStore, ReducerStateType<UserData>>(selectUserData);

  useEffect(() => {
    if (doFetch.fetch && doFetch.data !==null) {
      dispatch(fetchUserAsync(methodAuth, doFetch.data));
      
      setDoFetch((prevState) => ({
        ...prevState,
        fetch: false
      }));
    }
  }, [doFetch, dispatch, methodAuth]);

  function fetch(data: AuthFormData): void {
    setDoFetch((prevState) => ({
      ...prevState,
      data,
      fetch: true
    }));
  }

  return {
    data,
    isFetching,
    error,
    fetch
  };
};