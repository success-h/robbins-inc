import { SectionProps } from '@/app/[lang]/dictionaries';
import React from 'react';

export default function WhyUs({ dict }: SectionProps) {
  return (
    <section className="mt-20 p-5">
      <div className="max-w-6xl border-t-2 border-white mx-auto">
        <h3 className="text-3xl md:text-5xl my-10">{dict.whyus.title}</h3>
        <div className="mb-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {dict.whyus.reasons.map((item, idx) => (
            <div key={idx} className="bg-[#121212] p-4 rounded-lg">
              <h4 className="text-2xl mb-4 font-black">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
