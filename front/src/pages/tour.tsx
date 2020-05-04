import React, { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import { useCurrentTourFetch } from '../tours/hooks/useCurrentTourFetch';
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

  if (data.currentTour) {
    return (
      <>
        <Header 
          name={data.currentTour.name}
          startLocation={data.currentTour.startLocation}
          duration={data.currentTour.duration}
          imageCover={data.currentTour.imageCover}
        />
        <Description 
          description={data.currentTour.description}
          name={data.currentTour.name}
          difficulty={data.currentTour.difficulty}
          startDates={data.currentTour.startDates}
          maxGroupSize={data.currentTour.maxGroupSize}
          ratingsAverage={data.currentTour.ratingsAverage}
          guides={data.currentTour.guides}
        />
        <Images images={data.currentTour.images} name={data.currentTour.name}/>
        <Reviews reviews={data.currentTour.reviews}/>
        <CTA images={data.currentTour.images} duration={data.currentTour.duration} />
      </>
    )
  }

  return <div>Tour page</div>;
}