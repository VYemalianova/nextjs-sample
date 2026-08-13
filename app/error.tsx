'use client';

import Image from 'next/image';
import Link from 'next/link';

const Error = ({ error }: { error: Error }) => {
  const message = error?.message || 'An unexpected error occurred.';

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="flex items-center justify-center gap-32 max-sm:flex-col">
        <Image
          src="/images/error.png"
          alt="Error illustration"
          width={89}
          height={89}
          priority
        />

        <div className="flex flex-col">
          <h2>Oops! Something went wrong...</h2>

          <p className="mt-8 text-xl">{message}</p>

          <p className="mt-8">
            Please{' '}
            <Link href="/" className="text-purple-01 underline font-bold">
              go back to the homepage
            </Link>{' '}
            and try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
