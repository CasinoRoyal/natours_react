import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UserData } from '../types';
import { selectUserData } from '../selectors';
import { checkUserAsync } from '../actions';
import { ReducerStateType } from '../../store/types';
import { AppStore } from '../../store/store';

export const useUser = (): UserData => {
  const dispatch = useDispatch();
  const {
    data
  } = useSelector<AppStore, ReducerStateType<UserData>>(selectUserData);

  useEffect(() => {
    if (data) return;

    dispatch(checkUserAsync());
  }, [dispatch, data]);

  return data;
}