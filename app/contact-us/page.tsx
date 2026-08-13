import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_NETWORK_LIST = ['facebook', 'instagram', 'pinterest', 'reddit', 'twitter'];

const ContactUsPage = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col gap-8 p-8">
      <div className="w-1/2 mb-32">
        <h1 className="text-gradient">
          Contact Our Team
        </h1>

        <p className="text-xl">
          We exist! You can fill out our form to ask a question or tell us more about your inquiries.
          This is the fastest and easiest way to reach us. We honestly and enthusiastically read each
          and every message we get. And we always write back.
        </p>
      </div>

      <div className="w-1/2">
        <p className="uppercase text-gun-powder font-bold">
          You can also follow us on social media:
        </p>

        <div className="flex items-center gap-32 mt-16">
          {SOCIAL_NETWORK_LIST.map((network, index) => (
            <Image
              key={index}
              src={`/icons/social-icons/${network}.svg`} 
              alt={`${network} icon`}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          ))}
        </div>

        <div className="flex items-center gap-16 mt-16">
          <p className="uppercase text-gun-powder font-bold">
            Our email address:
          </p>
          <Link href="mailto:example@example.com?subject=contact with support" className="text-purple-01 underline font-bold">
            support@astroyod.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
