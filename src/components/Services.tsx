import { SectionProps } from '@/app/[lang]/dictionaries';

export default function Services({ dict }: SectionProps) {
  return (
    <section id="services" className="py-16 px-6 bg-gray-50">
      <div className="   max-w-6xl mx-auto">
        <h2 className="text-3xl text-black md:text-6xl font-bold mb-6 font-mono">
          {dict.service.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {dict.service.description}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {dict.service.services.map((item, idx) => (
            <div
              key={idx}
              className="text-center bg-emerald-500 py-4 border-b-2 border-gray-200"
            >
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
