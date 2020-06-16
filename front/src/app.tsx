import React, { FC, ReactElement, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppRouter } from './router/app-router';
import { useUser } from './user/hooks/use-user';
import { useAuth } from './auth/hooks/use-auth';
import { Header } from './shareable/ui/header';
import { Footer } from './shareable/ui/footer';

export const App: FC = (): ReactElement => {
  const { data } = useUser();
  const { error } = useAuth();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);


  return (
    <Router>

      <Header data={data} />

      <AppRouter />

      <Footer />

    </Router>
  );
}