import { SectionProps } from '@/app/[lang]/dictionaries';
import { Inspiration } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const greatVibes = Inspiration({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: ['400'],
});

export default function Hero({ dict }: SectionProps) {
  return (
    <section className="relative pt-44  h-screen place-items-center place-content-center">
      <div className="px-4">
        <h1 className="max-md:text-center font-bold md:-mt-96 text-[60px] md:text-[200px] text-start">
          {dict.hero.title}
        </h1>
        <p
          className={`max-md:text-center text-emerald-400 text-7xl md:text-9xl text-start font-bold mb-6 ${greatVibes.className}`}
        >
          {dict.hero.sub_title}
        </p>
        <Link href={'#contact'} className="flex">
          <button className="text-gray-600 cursor-pointer max-md:mx-auto bg-emerald-400 py-3 px-5">
            {dict.hero.visit_studio}
          </button>
        </Link>
      </div>
      <Image
        className="md:absolute max-md:w-44 mt-20 md:top-1/2 max-md:mt-10 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
        src={'/hero.png'}
        height={300}
        width={300}
        alt="hero"
      />
    </section>
  );
}
