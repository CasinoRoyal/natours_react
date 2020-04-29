import React, { FC, ReactElement } from 'react';

import { CardItem, CardItemProps } from './card-item';
import { useToursFetch } from '../../../tours/hooks/useToursFetch';
import { Tour } from '../../../tours/types';

export const CardsList: FC = (): ReactElement => {
  const { data, isFetching, error } = useToursFetch();

  return (
    <div className="card-container">
      {
        data.map((tour, idx): ReactElement<CardItemProps> => {
          return <CardItem key={idx} cardData={tour} />
        })
      }
    </div>
  );
};