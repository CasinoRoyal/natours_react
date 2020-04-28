import React, { FC, ReactElement } from 'react';

import { Header } from './shareable/ui/header';
import { CardsList } from './shareable/ui/cards-list';

export const App: FC = (): ReactElement => {
  return (
    <>
      <Header />
      
      <main className="main">
        <CardsList />
      </main>
    </>
  )
};