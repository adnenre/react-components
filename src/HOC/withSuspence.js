import React from 'react';
import Loading from '../components/Loading';

const withSuspense = (WrappedComponent) => {
  const WithSuspense = (props) => (
    <React.Suspense fallback={<Loading $primary />}>
      <WrappedComponent {...props} />
    </React.Suspense>
  );

  // Preserve the original display name
  WithSuspense.displayName =
    WrappedComponent.displayName || WrappedComponent.name;

  return WithSuspense;
};

export default withSuspense;
