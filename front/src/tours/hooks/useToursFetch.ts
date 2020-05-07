import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tours } from '../types';
import { getAllToursData } from '../selectors';
import { fetchToursAsync } from '../actions';
import { appStore } from '../../store/store';

type SelectedCurrentTourState = {
  data: Tours;
  isFetching: boolean;
  error: boolean;
};

export const useToursFetch = (): SelectedCurrentTourState => {
  const dispatch = useDispatch();
  const { 
    data, 
    isFetching, 
    error
  } = useSelector<appStore, SelectedCurrentTourState>(getAllToursData);

  useEffect(() => {
    dispatch(fetchToursAsync())
  }, [dispatch]);

  return {
    data, 
    isFetching, 
    error
  };
}
