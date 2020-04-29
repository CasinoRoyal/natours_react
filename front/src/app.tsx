import React, { FC, ReactElement } from 'react';

import { AppRouter } from './app-router';
import { Header } from './shareable/ui/header';
import { Footer } from './shareable/ui/footer';

export const App: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}