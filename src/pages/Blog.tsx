
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Digital Transformation for Small Businesses in East Africa",
      excerpt: "How small businesses across East Africa are leveraging technology to compete in the global marketplace.",
      date: "May 5, 2023",
      author: "Daniel Kebede",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      slug: "digital-transformation-small-businesses"
    },
    {
      title: "The Future of ERP Solutions for African Enterprises",
      excerpt: "Exploring how modern ERP solutions are being adapted to meet the unique challenges of African businesses.",
      date: "April 18, 2023",
      author: "Tigist Haile",
      category: "ERP",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      slug: "future-erp-solutions-africa"
    },
    {
      title: "Mobile-First Development: Essential for African Markets",
      excerpt: "Why mobile-first development approaches are crucial for businesses targeting African consumers.",
      date: "March 24, 2023",
      author: "Frehiwot Tadesse",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      slug: "mobile-first-development-africa"
    },
    {
      title: "Cybersecurity Challenges for Growing Businesses",
      excerpt: "Key cybersecurity considerations for businesses experiencing rapid digital growth in emerging markets.",
      date: "February 10, 2023",
      author: "Abebe Bekele",
      category: "Security",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      slug: "cybersecurity-challenges-growing-businesses"
    },
    {
      title: "Cloud Computing Solutions for Limited Infrastructure",
      excerpt: "How businesses in regions with limited infrastructure can leverage cloud computing for growth.",
      date: "January 15, 2023",
      author: "Daniel Kebede",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      slug: "cloud-computing-limited-infrastructure"
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Blog Hero Section */}
      <section className="py-20 bg-brand-light" id="blog-top">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Arada Tech Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, trends, and expert advice on digital transformation and technology solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={blogPosts[0].image}
                alt={blogPosts[0].title} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-primary">{blogPosts[0].category}</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">{blogPosts[0].title}</h2>
              <p className="text-sm text-muted-foreground mb-4">
                {blogPosts[0].date} • By {blogPosts[0].author}
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                {blogPosts[0].excerpt}
              </p>
              <Button className="font-medium">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={post.image}
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{post.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {post.date} • By {post.author}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="text-primary font-medium text-sm hover:underline inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="font-medium">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-lg mb-8">
              Get the latest articles, news and insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="outline" className="whitespace-nowrap w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
