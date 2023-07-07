import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import { benefitOne } from '../components/data';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Faq from '../components/faq';
import PopupWidget from '../components/popupWidget';
import Cta from '../components/cta';
import HorizontalScroll from '../components/horizontalScroll';

const Home = () => {
  return (
    <>
      <Head>
        <title>Skyrim Travels</title>
        <meta
          name="Skyrim Travels"
          content="Skyrim Travels Private Limited is a a trusted and dynamic travel agency based in Sri Lanka, committed to making your travel experiences exceptional.

          As a premier provider of travel services, we specialize in offering a range of comprehensive solutions to meet your travel needs. Whether you're planning a business trip, a family vacation, or a romantic getaway, we've got you covered.
          
          At Skyrim Travels, we understand that every journey is unique, and that's why we go the extra mile to provide personalized and tailored services. Our dedicated team of travel experts is here to assist you every step of the way, ensuring that your travel plans are seamless and hassle-free.
          
          Our extensive range of services includes booking air tickets to your desired destinations, offering visa assistance to help you navigate the complexities of international travel, and curating exciting holiday packages that cater to various preferences and budgets. Additionally, we provide comprehensive travel insurance options to safeguard your trip against any unforeseen circumstances.
          
          Customer satisfaction is at the heart of our business. We pride ourselves on delivering the best customer service to each and every client we serve. Our team is committed to understanding your unique requirements and providing personalized recommendations to enhance your travel experiences. We strive to exceed your expectations and create lasting memories.
          
          Choose Skyrim Travels Private Limited for a delightful travel experience. Let us handle the details while you focus on creating unforgettable moments. Contact us today and embark on your next adventure with confidence!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      {/* <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      <SectionTitle title="Customer Reviews"></SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="Countries" title="Countries we are working on">
      </SectionTitle>
      <Faq /> */}
      <SectionTitle title="Find us on Google Maps"></SectionTitle>
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
