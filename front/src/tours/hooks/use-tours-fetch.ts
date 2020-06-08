import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tours } from '../types';
import { getAllToursData } from '../selectors';
import { fetchToursAsync, fetchToursSuccess, fetchToursStart } from '../actions';
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

    if (data.length !==0) {
      dispatch(fetchToursStart());
      dispatch(fetchToursSuccess(data));
      return;
    };

    dispatch(fetchToursAsync())
  }, [dispatch, data]);

  return {
    data, 
    isFetching, 
    error
  };
};