import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

export default function Services({ dict }: SectionProps) {
  return (
    <section id="services" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold mb-6 font-mono">
          {dict.service.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {dict.service.description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dict.service.services.map((item, idx) => (
            <div
              key={idx}
              className="text-center py-4 border-b-2 border-gray-200"
            >
              <Image
                src={item.image}
                height={400}
                width={400}
                alt="Hydro therapy"
                className="rounded-3xl bg-cover object-cover mb-4"
              />
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
