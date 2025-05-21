"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const benefits = [
    'Business finance consulting and planning',
    'Accounting, taxation, and compliance support',
    'Investment and cash flow management',
    'Strategic HR consulting and recruitment solutions',
    'Payroll processing and employee lifecycle management',
    'Customized solutions for startups and SMEs'
  ];

  return (
    <section className="py-20 bg-muted/50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image 
               src="/images/mockup.png"
               // src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration" 
                width={600} 
                height={450}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-blue-600 font-medium mb-2">About Us</h4>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Struggling to Streamline Your Finance and HR Operations?
              </h2>
              <p className="text-muted-foreground mb-6">
                DevenSun Consultants is your trusted partner in Finance and HR solutions, empowering businesses with smart financial strategies and streamlined human resource services. We deliver customized support to drive efficiency, compliance, and growth.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={loaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <p>{benefit}</p>
                </motion.div>
              ))}
            </div>

            {/* <div className="pt-6">
              <Button size="lg" className="rounded-full">
                Learn More About Us
              </Button>
            </div> */}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {/* <div className="text-center">
            <h3 className="font-playfair text-4xl font-bold text-blue-600 mb-2">12+</h3>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="font-playfair text-4xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-muted-foreground">Clients Served</p>
          </div>
          <div className="text-center">
            <h3 className="font-playfair text-4xl font-bold text-blue-600 mb-2">98%</h3>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="font-playfair text-4xl font-bold text-blue-600 mb-2">30+</h3>
            <p className="text-muted-foreground">Expert Consultants</p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}