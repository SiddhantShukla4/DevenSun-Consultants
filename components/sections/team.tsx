"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from '@/components/ui/motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Principal Consultant',
    image: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'With over 20 years of experience in HR leadership roles, Sarah specializes in organizational transformation and executive coaching.',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Talent Acquisition',
    image: 'https://images.pexels.com/photos/3790790/pexels-photo-3790790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Michael brings 15+ years of experience in recruitment strategy and has helped numerous Fortune 500 companies build high-performing teams.',
  },
  {
    name: 'Alicia Rodriguez',
    role: 'HR Compliance Specialist',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Alicia is an expert in employment law and HR compliance, helping organizations navigate complex regulatory environments with ease.',
  },
  {
    name: 'James Wilson',
    role: 'Learning & Development Lead',
    image: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'James specializes in creating impactful training programs that enhance employee capabilities and drive organizational performance.',
  },
];

export default function Team() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 bg-background" id="team">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-blue-600">Expert Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team of seasoned HR professionals brings diverse expertise 
            and industry experience to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden h-full group">
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors">
                          <Linkedin size={16} className="text-white" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors">
                          <Twitter size={16} className="text-white" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors">
                          <Mail size={16} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}