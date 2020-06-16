import React, { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../auth/hooks/use-auth';
import { AuthForm } from '../auth/components/auth-form';
import { WrappedSpinner } from '../shareable/ui/wrapper';

export const AuthPage: FC = (): ReactElement => {
  const { isFetching, isRequested } = useAuth();
  const { methodAuth } = useParams<{methodAuth: string}>();
  
  const isSignup = methodAuth ==='signup' ? true : false;

  if ((!isFetching && !isRequested) || isFetching) {
    return <WrappedSpinner />
  }

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">
          {isSignup ? 'Create new account' : 'Log into your account'}
        </h2>
        
        <AuthForm isSignup={isSignup} />
      </div>
    </main>
  );
}