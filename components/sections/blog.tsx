"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Remote Work: HR Strategies for Success',
    excerpt: 'Explore effective practices for managing remote teams and maintaining organizational culture in a distributed work environment.',
    date: 'May 15, 2025',
    category: 'Workplace Trends',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'future-of-remote-work'
  },
  {
    title: 'Building an Inclusive Workplace: Beyond DEI Initiatives',
    excerpt: 'Discover how to create genuinely inclusive company cultures that go beyond surface-level diversity initiatives.',
    date: 'April 28, 2025',
    category: 'Diversity & Inclusion',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'inclusive-workplace'
  },
  {
    title: 'Performance Management Reimagined for the Modern Workforce',
    excerpt: 'Learn how leading companies are transforming their performance review processes to focus on continuous feedback and growth.',
    date: 'April 10, 2025',
    category: 'Employee Development',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'performance-management'
  },
];

export default function Blog() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 bg-background" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              HR <span className="text-blue-600">Insights</span> & News
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Expert perspectives on the latest HR trends, best practices, and strategic workforce management.
            </p>
          </div>
          <Button variant="outline" className="self-start">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}