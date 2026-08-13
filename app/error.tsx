'use client';

const Error = ({ error }: { error: Error }) => {
  return <div>{error?.message || 'An unexpected error occurred.'}</div>;
};

export default Error;
