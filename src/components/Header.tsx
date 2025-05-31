'use client';
import { SectionProps } from '@/app/[lang]/dictionaries';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const SUPPORTED_LANGUAGES = ['en', 'es', 'nl'];

export default function Header({ dict }: SectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    const segments = pathname.split('/');

    if (SUPPORTED_LANGUAGES.includes(segments[1])) {
      segments[1] = selectedLang;
    } else {
      segments.splice(1, 0, selectedLang);
    }

    const newPath = segments.join('/') || '/';
    //@ts-expect-error error
    setLanguage(selectedLang);
    router.push(newPath);
  };

  return (
    <header className="bg-[#FCFAF8] border-b border-gray-400 shadow-sm py-4 px-6 z-50 fixed right-0 left-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-mono font-bold text-gray-800">
          Anny
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {dict.navigation.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-gray-600 hover:text-gray-900 uppercase"
            >
              {item.name}
            </Link>
          ))}

          {/* Language Select (Desktop) */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="ml-4 px-2 py-1 border rounded text-gray-700"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="nl">Nederlands</option>
            {/* Add more options here if needed */}
          </select>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 space-y-4">
          {dict.navigation.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="block text-gray-600 hover:text-gray-900 uppercase"
            >
              {item.name}
            </Link>
          ))}

          {/* Language Select (Mobile) */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="mt-2 w-full px-2 py-1 border rounded text-gray-700"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="nl">Nederlands</option>
            {/* Add more options here if needed */}
          </select>
        </div>
      )}
    </header>
  );
}
