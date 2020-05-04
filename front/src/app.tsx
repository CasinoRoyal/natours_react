import React, { FC, ReactElement } from 'react';

import { AppRouter } from './app-router';


export const App: FC = (): ReactElement => {
  return (
    <>
      <AppRouter />
    </>
  );
}