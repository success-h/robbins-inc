import Image from 'next/image';
import { SectionProps } from '@/app/[lang]/dictionaries';

export default function AromaTherapy({ dict }: SectionProps) {
  return (
    <section className="py-16 px-6">
      <div className="   max-w-6xl mx-auto">
        <div className="gap-10 grid md:grid-cols-3 items-center">
          <div className="col-span-1 max-md:place-items-center max-md:mt-10">
            <h2 className="text-3xl font-bold font-mono mb-6">
              {dict.aroma.title}
            </h2>
            <Image
              height={700}
              width={400}
              alt="aromatherapy"
              src={'/artist.png'}
              className="bg-center"
            />
          </div>
          <div className="col-span-2 max-md:place-items-center">
            <h2 className="text-3xl font-bold font-mono mb-2">
              {dict.aroma.name}
            </h2>
            <div className="text-lg text-emerald-400 mb-6">
              {dict.aroma.subtitle}
            </div>
            <p className="mb-6 leading-relaxed">{dict.aroma.desc}</p>
            <a href="#" className="text-blue-500 hover:underline font-medium">
              {dict.aroma.gallery} →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 my-12"></div>
      </div>
    </section>
  );
}
