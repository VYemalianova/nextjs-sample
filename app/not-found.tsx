import Image from 'next/image'
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col gap-8 p-8">
      <div className="w-full max-w-xl text-center lg:w-1/2">
        <h2>OOPS! Page Not Found</h2>
        <p className="mt-8 text-xl text-gun-powder">
          This page may have been moved, renamed, or it no longer exists.
        </p>
      </div>

      <div className="flex w-full justify-center lg:w-1/2">
        <Image
          src="/images/404.png"
          alt="404 Not Found"
          width={520}
          height={420}
          priority
          className="h-auto w-full max-w-[420px] lg:max-w-[520px]"
        />
      </div>

      <div className="w-full max-w-xl text-center lg:w-1/2">
        <p className="mt-8 text-gun-powder">
          Open the main page <Link href="/" className="text-purple-01 underline font-bold">Astroyod.com</Link>
        </p>
      </div>
    </div>
  )
};

export default NotFound;
