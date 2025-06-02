import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

export default function AboutUs({ dict }: SectionProps) {
  return (
    <section id="about" className="py-16 px-6">
      <div className=" max-w-6xl p-5 md:p-10 mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">
          {dict.about.title}
        </h2>
        <div className="grid grid-cols-3 gap-2 sm:gap-10 my-5">
          <Image
            height={200}
            width={89}
            alt="tatoo"
            src={'/rose.jpg'}
            className="h-full w-full rounded md:rounded-2xl"
          />
          <Image
            height={200}
            width={89}
            alt="tatoo"
            src={'/rose2.png'}
            className="h-full w-full rounded md:rounded-2xl"
          />
          <Image
            height={200}
            width={89}
            alt="tatoo"
            src={'/sacred.png'}
            className="h-full w-full rounded md:rounded-2xl"
          />
        </div>
        <p className="max-md:text-sm mb-12 leading-relaxed">
          {dict.about.desc}
        </p>
      </div>
    </section>
  );
}
