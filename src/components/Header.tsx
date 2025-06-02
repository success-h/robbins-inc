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
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Check, ChevronDown } from 'lucide-react';

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
  const handleLanguageChange = (lang: string) => {
    const segments = pathname.split('/');

    if (SUPPORTED_LANGUAGES.includes(segments[1])) {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang);
    }

    const newPath = segments.join('/') || '/';
    localStorage.setItem('preferredLanguage', lang);
    //@ts-expect-error error
    setLanguage(lang);
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
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-black text-3xl">
              Select Language
            </DialogTitle>
            <DialogDescription>
              Please select your preferred language
            </DialogDescription>
            <div className="mx-auto my-4 flex gap-4">
              <DialogClose>
                <Button
                  onClick={() => handleLanguageChange('en')}
                  className={`${
                    language === 'en' ? 'bg-emerald-500 px-8 py-2' : 'bg-black'
                  }`}
                  variant="outline"
                >
                  🇺🇸 English {language === 'en' && <Check />}
                </Button>
              </DialogClose>
              <DialogClose>
                <Button
                  onClick={() => handleLanguageChange('es')}
                  className={`${
                    language === 'es'
                      ? 'bg-emerald-500 px-8 py-2'
                      : 'bg-white text-black'
                  }`}
                  variant="outline"
                >
                  Spainish 🇪🇸{language === 'es' && <Check />}
                </Button>
              </DialogClose>
              <DialogClose>
                <Button
                  onClick={() => handleLanguageChange('nl')}
                  className={`${
                    language === 'nl'
                      ? 'bg-emerald-500 px-8 py-2'
                      : 'bg-white text-black'
                  }`}
                  variant="outline"
                >
                  🇳🇱 Dutch {language === 'nl' && <Check />}
                </Button>
              </DialogClose>
            </div>
            s
          </DialogHeader>
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

          <Button variant={'ghost'} onClick={() => setShowModal(true)}>
            <div className="flex items-center text-lg uppercase border border-white px-4 rounded-sm bg-transparent">
              {language === 'en' ? '🇺🇸' : language === 'es' ? '🇪🇸' : '🇳🇱'}{' '}
              {language}
              <ChevronDown />{' '}
            </div>
          </Button>
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
        <div className="md:hidden bg-black py-4 px-6 space-y-4">
          {dict.navigation.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="block hover:text-gray-900 uppercase"
            >
              {item.name}
            </Link>
          ))}

          <Button variant={'ghost'} onClick={() => setShowModal(true)}>
            <div className="flex items-center text-lg uppercase border border-white px-4 rounded-sm bg-transparent">
              {language === 'en' ? '🇺🇸' : language === 'es' ? '🇪🇸' : '🇳🇱'}{' '}
              {language}
              <ChevronDown />{' '}
            </div>
          </Button>
        </div>
      )}
    </header>
  );
}
