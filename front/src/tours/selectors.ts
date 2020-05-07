import { createSelector, Selector } from 'reselect';

import { appStore } from '../store/store';
// import { ToursDataState } from './types';
import { ToursState } from './tour-reducer'

const getToursData: Selector<appStore, ToursState> = (state) => state.tours;

export const getAllToursData = createSelector(
  getToursData,
  (toursData) => ({ 
    data: toursData.data.tours,
    isFetching: toursData.isFetching,
    error: toursData.error
  })
);

export const getCurrentTourData = createSelector(
  getToursData,
  (toursData) => ({ 
    data: toursData.data.currentTour,
    isFetching: toursData.isFetching,
    error: toursData.error
  })
);