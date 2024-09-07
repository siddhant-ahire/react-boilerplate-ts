import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Oops! Something went wrong.</h1>
      <p>{(error as Error)?.message || 'An unexpected error occurred.'}</p>
    </div>
  );
};

export default ErrorPage;
