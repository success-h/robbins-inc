import Head from 'next/head';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import AromaTherapy from '@/components/AromaTherapy';
import Services from '@/components/Services';
import { NextPage } from 'next';
import { getDictionary } from './dictionaries';
import ClientReviews from '@/components/ClientReviews';

const Home: NextPage<{
  params: Promise<{ lang: 'en' | 'es' | 'nl' }>;
}> = async ({ params }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Head>
        <title>Anny Spa - Wellness Center</title>
        <meta
          name="description"
          content="Welcome to Anny Spa - Your wellness center for relaxation and rejuvenation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header dict={dict} />
      <Hero dict={dict} />
      <WelcomeSection dict={dict} />
      <Services dict={dict} />
      <AromaTherapy dict={dict} />
      <ClientReviews dict={dict} />
      <ContactSection dict={dict} />
      <Footer dict={dict} />
    </>
  );
};

export default Home;
