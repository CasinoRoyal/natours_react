import React, { FC, ReactElement } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { useAuth } from '../user/hooks/use-auth';
import { useUser } from '../user/hooks/use-user';
import { Spinner } from '../shareable/ui/spinner';
import { AuthForm } from '../user/components/auth-form';

export const AuthPage: FC = (): ReactElement => {
  const user = useUser();
  const { methodAuth } = useParams<{methodAuth: string}>();
  const { error, isFetching } = useAuth(methodAuth);

  if (user) {
    return <Redirect to='/' />
  }
  
  const isSignup = methodAuth ==='signup' ? true : false;

  if (isFetching) return <Spinner />

  if (error) return <div>{error}</div>

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