import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

export default function WelcomeSection({ dict }: SectionProps) {
  return (
    <section id="about" className="py-16 px-6 bg-[#FCFAF8]">
      <div className="max-w-5xl relative p-5 md:p-10 grid md:grid-cols-2 rounded-2xl mx-auto bg-gray-100">
        <div className="max-md:absolute">
          <Image
            className="h-56 w-56 md:h-[400px] max-md:opacity-30 md:w-[400px]"
            height={500}
            width={500}
            src={'/lotion.webp'}
            alt="lotion"
          />
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-baseline justify-center">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">
            {dict.about.title}
          </h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            {dict.about.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
