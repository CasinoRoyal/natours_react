import { useSelector } from 'react-redux';

import { UserData } from '../types';
import { selectUserData } from '../selectors';
import { ReducerStateType } from '../../store/types';
import { AppStore } from '../../store/store';

export const useUser = (): UserData | null => {
  const {
    data
  } = useSelector<AppStore, ReducerStateType<UserData>>(selectUserData);
  console.log(data);
  return data || null;
}