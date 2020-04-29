import React, { FC, ReactElement } from 'react';

import { CardsList } from '../shareable/ui/cards/cards-list';

export const MainPage: FC = (): ReactElement => {
  return (
    <main className="main">
      <CardsList />
    </main>
  )
}