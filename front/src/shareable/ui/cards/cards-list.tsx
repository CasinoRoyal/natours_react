import React, { FC, ReactElement } from 'react';

import { CardItem, CardItemProps } from './card-item';
import { useToursFetch } from '../../../tours/hooks/use-tours-fetch';

export const CardsList: FC = (): ReactElement => {
  const { data, error } = useToursFetch();
  console.log(error);

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