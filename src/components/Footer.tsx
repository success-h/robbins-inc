import { SectionProps } from '@/app/[lang]/dictionaries';
import Link from 'next/link';

export default function Footer({ dict: { footer, service } }: SectionProps) {
  return (
    <footer className="bg-white text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.title}</h3>
            <p className="">{footer.desc}</p>
          </div>
          <div>
            <h4 className="font-medium mb-4">{footer.services.title}</h4>
            <ul className="space-y-2 ">
              <>
                {service.services.map((item) => (
                  <li key={item.title}>{item.title}</li>
                ))}
              </>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">{footer.company.title}</h4>
            <ul className="space-y-2 ">
              {footer.company.navigation.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">{footer.connect.title}</h4>
            <ul className="space-y-2 ">
              {footer.connect.navigation.map((item, key) => (
                <li key={key}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center ">
          <p>
            © {new Date().getFullYear()}
            {footer.all_rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
