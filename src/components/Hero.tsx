import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

export default function Hero({ dict }: SectionProps) {
  return (
    <section className="relative pt-44 max-md:h-[500px] md:h-screen flex items-center justify-center bg-[#FCFAF8]">
      <div className="absolute md:left-56 text-center z-10 px-4">
        <h1 className="max-md:text-center text-7xl md:text-8xl text-start font-mono font-light mb-6">
          {dict.hero.title} <br /> {dict.hero.sub_title}
        </h1>
        <p className="text-gray-600 animate-bounce">{dict.hero.scroll}</p>
      </div>
      <Image
        className="absolute object-cover bg-cover opacity-80 md:right-20 z-0"
        src={'/hero.png'}
        height={700}
        width={900}
        alt="hero"
      />
    </section>
  );
}
