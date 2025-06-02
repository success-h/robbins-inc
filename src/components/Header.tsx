'use client';
import { SectionProps } from '@/app/[lang]/dictionaries';
import { useLanguage } from '@/context/LanguageContext';
import { Inspiration } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';

const SUPPORTED_LANGUAGES = ['en', 'es', 'nl'];

const greatVibes = Inspiration({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: ['400'],
});

export default function Header({ dict }: SectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Save language to localStorage & navigate
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    const segments = pathname.split('/');

    if (SUPPORTED_LANGUAGES.includes(segments[1])) {
      segments[1] = selectedLang;
    } else {
      segments.splice(1, 0, selectedLang);
    }

    const newPath = segments.join('/') || '/';
    localStorage.setItem('preferredLanguage', selectedLang);
    //@ts-expect-error error
    setLanguage(selectedLang);
    router.push(newPath);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage');
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem('hasVisited', 'true');
    } else if (storedLang && storedLang !== language) {
      const segments = pathname.split('/');
      if (SUPPORTED_LANGUAGES.includes(segments[1])) {
        segments[1] = storedLang;
      } else {
        segments.splice(1, 0, storedLang);
      }
      const newPath = segments.join('/') || '/';
      router.push(newPath);
      //@ts-expect-error error
      setLanguage(storedLang);
    }
  }, []);

  return (
    <header className="border-b backdrop-blur-2xl shadow-sm py-4 px-6 z-50 fixed right-0 left-0">
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Select Language</DialogTitle>
            <DialogDescription>
              Please select your preferred language
            </DialogDescription>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="mt-2 w-full px-2 py-1 border rounded text-gray-700"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="nl">Nederlands</option>
            </select>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`text-4xl font-vibes font-bold ${greatVibes.className}`}
        >
          Rr
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {dict.navigation.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="hover:text-gray-900 uppercase"
            >
              {item.name}
            </Link>
          ))}

          <select
            value={language}
            onChange={handleLanguageChange}
            className="ml-4 px-2 py-1 border rounded"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="nl">Nederlands</option>
          </select>
        </nav>

        <button
          className="md:hidden"
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

      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 space-y-4">
          {dict.navigation.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="block hover:text-gray-900 uppercase"
            >
              {item.name}
            </Link>
          ))}

          <select
            value={language}
            onChange={handleLanguageChange}
            className="mt-2 w-full px-2 py-1 border rounded text-gray-700"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="nl">Nederlands</option>
          </select>
        </div>
      )}
    </header>
  );
}
