import React from 'react';
import styled from 'styled-components';
import { useRouteError } from 'react-router-dom';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <ErrorContainer>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorContainer>
  );
}
