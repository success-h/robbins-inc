import Image from 'next/image';
import ClientReviews from './ClientReviews';
import { SectionProps } from '@/app/[lang]/dictionaries';

export default function AromaTherapy({ dict }: SectionProps) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          <div className="max-md:place-items-center">
            <h2 className="text-3xl font-bold font-mono mb-6">
              {dict.aroma.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed md:max-w-2/3">
              {dict.aroma.desc}
            </p>
            <a href="#" className="text-blue-500 hover:underline font-medium">
              {dict.aroma.learn} →
            </a>
          </div>
          <div className="max-md:place-items-center max-md:mt-10">
            <Image
              height={600}
              width={500}
              alt="aromatherapy"
              src={'/sauna.png'}
            />
          </div>
        </div>

        <div className="border-t border-gray-200 my-12"></div>
      </div>
    </section>
  );
}
