import { useSelector } from 'react-redux';

import { UserData } from '../types';
import { selectUserData } from '../selectors';
import { ReducerStateType } from '../../store/types';
import { AppStore } from '../../store/store';

export const useUser = (): ReducerStateType<UserData> => {
  const {
    data,
    isFetching,
    error
  } = useSelector<AppStore, ReducerStateType<UserData>>(selectUserData);

  return { data, isFetching, error };
}
