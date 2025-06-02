import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

export default function ContactSection({ dict: { contact } }: SectionProps) {
  return (
    <section id="contact" className="bg-stone-950 py-16 ">
      <div className="   max-w-6xl mx-auto  py-10 px-10">
        <div className="grid md:grid-cols-3 gap-5 md:gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {contact.location.title}
            </h2>
            <p>{contact.location.add1}</p>
            <p>{contact.location.add2}</p>
            <p>{contact.location.add3}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">{contact.opening.title}</h2>
            <p>{contact.opening.sub}</p>
            <p>{contact.opening.days}</p>
            <p>{contact.opening.time}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">{contact.contact.title}</h2>
            <p>{contact.contact.phone}</p>
            <p>{contact.contact.email}</p>
          </div>
        </div>
        <div className="mt-10">
          <Image
            alt="tattoo"
            height={500}
            width={900}
            className="w-full"
            src={'/animal.png'}
          />
        </div>
      </div>
    </section>
  );
}
