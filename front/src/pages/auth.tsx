import React, { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../user/hooks/use-auth';
import { Spinner } from '../shareable/ui/spinner';
import { AuthForm } from '../user/components/auth-form';

export const AuthPage: FC = (): ReactElement => {
  const { methodAuth } = useParams();
  const { login, signup, isFetch, isError } = useAuth();

  const isSignup = methodAuth ==='signup' ? true : false;

  if (isFetch) return <Spinner />

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