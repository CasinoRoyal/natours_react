import React, { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import { useCurrentTourFetch } from '../tours/hooks/use-current-tour-fetch';
import { Tour } from '../tours/types';
import { Header } from '../tours/components/header';
import { Description } from '../tours/components/description';
import { Images } from '../tours/components/images';
import { Reviews } from '../tours/components/reviews';
import { CTA } from '../tours/components/cta';

type ParamsType = {
  tourId: string;
}

export const TourPage: FC = (): ReactElement => {
  const { tourId } = useParams<ParamsType>();
  const { data, isFetching, error } = useCurrentTourFetch(tourId);

  if (data) {
    return (
      <>
        <Header 
          name={data.name}
          startLocation={data.startLocation}
          duration={data.duration}
          imageCover={data.imageCover}
        />
        
        <Description 
          description={data.description}
          name={data.name}
          difficulty={data.difficulty}
          startDates={data.startDates}
          maxGroupSize={data.maxGroupSize}
          ratingsAverage={data.ratingsAverage}
          guides={data.guides}
        />
        
        <Images images={data.images} name={data.name}/>
        
        <Reviews reviews={data.reviews}/>
        
        <CTA images={data.images} duration={data.duration} />
      </>
    )
  }

  return <div>Tour page</div>;
}