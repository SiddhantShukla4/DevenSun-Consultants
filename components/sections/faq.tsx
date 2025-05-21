"use client"

import { useEffect, useState } from 'react';
import { motion } from '@/components/ui/motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What industries do you serve with your Financial and HR consulting services?",
    answer: "We work with a diverse range of industries including startups, small and medium enterprises (SMEs), IT, manufacturing, retail, and service sectors. Our solutions are customized to meet the specific needs of each business."
  },
  {
    question: "Can we outsource only specific HR functions to DevenSun Consultants?",
    answer: "Absolutely. Our HR solutions are flexible and modular. You can choose to outsource specific functions like payroll, recruitment, or performance management based on your business requirements."
  },
  {
    question: "How do your financial consulting services benefit small businesses or startups?",
    answer: "We help small businesses and startups gain clarity on budgeting, cash flow, tax planning, and financial compliance—empowering them to make informed financial decisions and scale confidently."
  },
  {
    question: "Are your services compliant with Indian labor and tax laws?",
    answer: "Yes, all our services strictly adhere to the latest Indian labor laws, financial regulations, and tax compliance standards to ensure our clients remain fully compliant."
  },
  {
    question: "How do we get started with DevenSun Consultants?",
    answer: "You can get started by contacting us through our website or email. We’ll schedule an initial consultation to understand your needs and recommend the best service package for your business."
  },
];

export default function Faq() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our HR consulting services and approach.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}