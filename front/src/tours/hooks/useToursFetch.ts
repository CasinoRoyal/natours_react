import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchToursAsync } from '../actions';
import { TourState } from '../tour-reducer';
import { appStore } from '../../store/store';

export const useToursFetch = () => {
  const dispatch = useDispatch();
  const { 
    data, 
    isFetching, 
    error 
  } = useSelector<appStore, TourState>((state) => state.tours);

  useEffect(() => {
    dispatch(fetchToursAsync())
  }, [dispatch]);

  return {
    data, 
    isFetching, 
    error 
  };
}
