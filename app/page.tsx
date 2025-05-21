import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Team from '@/components/sections/team';
import Testimonials from '@/components/sections/testimonials';
import Cta from '@/components/sections/cta';
import Blog from '@/components/sections/blog';
import Faq from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Services />
      <About />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Cta />
      <Faq />
    </div>
  );
}