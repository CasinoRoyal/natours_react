import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tours } from '../types';
import { getAllToursData } from '../selectors';
import { fetchToursAsync } from '../actions';
import { AppStore } from '../../store/store';
import { ReducerStateType } from '../../store/types';

export const useToursFetch = (): ReducerStateType<Tours> => {
  const dispatch = useDispatch();
  const { 
    data, 
    isFetching, 
    error
  } = useSelector<AppStore, ReducerStateType<Tours>>(getAllToursData);

  useEffect(() => {
    dispatch(fetchToursAsync())
  }, [dispatch]);

  return {
    data, 
    isFetching, 
    error
  };
};