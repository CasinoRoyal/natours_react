import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrentTourAsync } from '../actions';
import { TourState } from '../tour-reducer';
import { appStore } from '../../store/store';


export const useCurrentTourFetch = (id: string): TourState => {
  const dispatch = useDispatch();
  const { 
    data, 
    isFetching, 
    error
  } = useSelector<appStore, TourState>((state) => state.tours);

  useEffect(() => {
    dispatch(fetchCurrentTourAsync(id))
  }, [dispatch, id]);

  return {
    data, 
    isFetching, 
    error
  };
}