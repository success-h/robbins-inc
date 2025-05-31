import { SectionProps } from '@/app/[lang]/dictionaries';

export default function ContactSection({ dict: { contact } }: SectionProps) {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{contact.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">
              {contact.contact.visit}
            </h3>
            <p className="text-gray-600">{contact.contact.add1}</p>
            <p className="text-gray-600">{contact.contact.add2}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">
              {contact.contact.get_intouch}
            </h3>
            <p className="text-gray-600">{contact.contact.get_intouch}</p>
            <p className="text-gray-600">{contact.contact.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
