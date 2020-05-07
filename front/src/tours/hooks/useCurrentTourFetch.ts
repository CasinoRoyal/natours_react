import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrentTourAsync } from '../actions';
import { CurrentTourDataState } from '../types';
// import { ToursState } from '../tour-reducer';
import { getCurrentTourData } from '../selectors';
import { appStore } from '../../store/store';


type SelectedCurrentTourState = {
  data: CurrentTourDataState;
  isFetching: boolean;
  error: boolean;
};

export const useCurrentTourFetch = (id: string): SelectedCurrentTourState => {
  const dispatch = useDispatch();
  const { 
    data, 
    isFetching, 
    error
  } = useSelector<appStore, SelectedCurrentTourState>(getCurrentTourData);

  useEffect(() => {
    dispatch(fetchCurrentTourAsync(id))
  }, [dispatch, id]);

  return {
    data, 
    isFetching, 
    error
  };
}