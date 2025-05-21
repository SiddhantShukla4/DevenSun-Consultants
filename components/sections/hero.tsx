"use client"

import { useEffect, useState } from 'react';
import { motion } from '@/components/ui/motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Cta from './cta';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  function handleOnClick(sectionId :string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

  return (
    <div className="relative w-full min-h-[80vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Professional team meeting"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Strategic Financial & HR Solutions for <span className="text-blue-400">Modern Businesses</span>
            </h1>
            <p className="text-lg md:text-l text-white/90 max-w-xl">
              At DevenSun Consultants, we deliver expert-led financial and HR solutions tailored for startups, SMEs, and growing businesses. From strategic financial planning and compliance to talent acquisition and HR management, our services are designed to help modern enterprises achieve sustainable growth and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button  onClick={() => handleOnClick('contact')} size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button  onClick={() => handleOnClick('services')} size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/20 hover:text-white">
                Our Services
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            {/* <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-medium text-white mb-4">Schedule a Consultation</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <select className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none">
                    <option value="" className="bg-gray-800">Select Service</option>
                    <option value="recruitment" className="bg-gray-800">Recruitment</option>
                    <option value="hr-strategy" className="bg-gray-800">HR Strategy</option>
                    <option value="training" className="bg-gray-800">Training & Development</option>
                    <option value="compliance" className="bg-gray-800">Compliance</option>
                  </select>
                </div>
                <Button type="submit" className="w-full rounded-lg" size="lg">
                  Book Now
                </Button>
              </form>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}