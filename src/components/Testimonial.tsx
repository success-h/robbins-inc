'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { SectionProps } from '@/app/[lang]/dictionaries';

export default function Testimonials({ dict }: SectionProps) {
  return (
    <div className="bg-[#121212] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b border-gray-700 inline-block pb-2">
          OUR CUSTOMER SAYS
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="mt-8"
        >
          {dict.testimonial.testimonies.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-black rounded-xl px-8 py-10 max-w-3xl mx-auto shadow-lg">
                <div className="text-6xl text-gray-600 mb-4">“</div>
                <p className="text-lg text-gray-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full grayscale h-14 w-14"
                  />
                  <div className="text-left">
                    <p className="text-green-400 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
