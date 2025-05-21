"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from '@/components/ui/motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Partnering with ElevateHR has transformed our talent acquisition process. We've been able to attract and retain top talent, significantly reducing our turnover rate.",
    author: "Jennifer Lee",
    title: "VP of Human Resources, TechGrowth Inc.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The compliance training and policy development provided by ElevateHR helped us navigate complex regulatory requirements with confidence. Their expertise is unmatched.",
    author: "Mark Williams",
    title: "CEO, Innovate Solutions",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The performance management system designed by ElevateHR has significantly improved employee engagement and productivity across our organization.",
    author: "Sophia Chen",
    title: "Operations Director, GlobalServe",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "ElevateHR's training programs have equipped our managers with the skills they need to lead effectively and build cohesive teams. The impact has been remarkable.",
    author: "David Rodriguez",
    title: "Managing Director, Fusion Finance",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

export default function Testimonials() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from organizations that have transformed their HR practices and achieved impressive results with our help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-0 shadow-md bg-white dark:bg-gray-900">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Quote className="h-10 w-10 text-blue-600/30" />
                      </div>
                      <p className="mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <Image 
              src="https://placehold.co/200x80/e6e6e6/999999?text=CLIENT+LOGO" 
              alt="Client Logo" 
              width={200} 
              height={80}
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div>
            <Image 
              src="https://placehold.co/200x80/e6e6e6/999999?text=CLIENT+LOGO" 
              alt="Client Logo" 
              width={200} 
              height={80}
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div>
            <Image 
              src="https://placehold.co/200x80/e6e6e6/999999?text=CLIENT+LOGO" 
              alt="Client Logo" 
              width={200} 
              height={80}
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div>
            <Image 
              src="https://placehold.co/200x80/e6e6e6/999999?text=CLIENT+LOGO" 
              alt="Client Logo" 
              width={200} 
              height={80}
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}