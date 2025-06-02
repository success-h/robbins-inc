import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

const Gallery = ({ dict }: SectionProps) => {
  return (
    <div className="py-16 px-4   max-w-6xl mx-auto">
      <div className="flex items justify-between">
        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12">
          {dict.gallery.title}
        </h2>
        <div className="text-emerald-400 cursor-pointer">
          {dict.gallery.see}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {dict.gallery.images.map((image, idx) => (
          <Image
            src={image}
            key={idx}
            alt="Client profile"
            height={400}
            width={300}
            className="object-cover h-full w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
