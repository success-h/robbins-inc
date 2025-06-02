import Head from 'next/head';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Artist from '@/components/Artist';
import Services from '@/components/Services';
import { NextPage } from 'next';
import { getDictionary } from './dictionaries';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonial';

const Home: NextPage<{
  params: Promise<{ lang: 'en' | 'es' | 'nl' }>;
}> = async ({ params }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-mono">
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
      <ContactSection dict={dict} />
      <AboutUs dict={dict} />
      <Services dict={dict} />
      <Artist dict={dict} />
      <Gallery dict={dict} />
      <WhyUs dict={dict} />
      <Testimonials dict={dict} />
      <Footer dict={dict} />
    </div>
  );
};

export default Home;
