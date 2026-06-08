export type BlogPost = {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'future-of-ai-india',
    title: 'The Future of AI in Indian Enterprises',
    date: 'June 2, 2026',
    author: 'Ananya Gupta',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    excerpt:
      'How artificial intelligence is reshaping operations, customer service, and decision-making for businesses across India.',
    content: `Artificial Intelligence is no longer just a buzzword; it's a critical component of modern business strategy. In India, we are seeing a rapid adoption of AI technologies across various sectors, from finance to healthcare and agriculture.\n\nEnterprises are leveraging AI for predictive analytics, allowing them to anticipate market trends and customer needs with unprecedented accuracy. Chatbots and virtual assistants powered by natural language processing (NLP) are handling complex customer service inquiries in multiple regional languages, providing 24/7 support.\n\nFurthermore, AI is streamlining supply chain logistics, optimizing routes, and reducing operational costs. As the infrastructure improves and cloud computing becomes more accessible, even SMEs are beginning to integrate AI tools to stay competitive.\n\nThe future looks promising, but it requires businesses to invest not just in technology, but in training their workforce to collaborate effectively with AI systems.`
  },
  {
    id: 'cloud-migration-2026',
    title: 'Why Indian SMEs Must Migrate to Cloud in 2026',
    date: 'June 1, 2026',
    author: 'Rahul Sharma',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
    excerpt:
      'Discover the cost benefits, security upgrades, and scalability advantages of moving your legacy systems to the cloud.',
    content: `For many Small and Medium Enterprises (SMEs) in India, on-premise servers have been the norm for decades. However, maintaining physical hardware in 2026 is not only cost-prohibitive but also a major security risk.\n\nMigrating to cloud platforms like AWS, Microsoft Azure, or Google Cloud offers unparalleled scalability. You pay only for what you use, allowing businesses to handle festival spikes (like Diwali sales) without buying expensive permanent servers.\n\nFurthermore, cloud providers offer enterprise-grade cybersecurity out of the box, protecting sensitive customer data from ransomware attacks, which have unfortunately become more common.\n\nIf you haven't started your cloud migration journey yet, the time to act is now. Partnering with a skilled IT agency can make this transition seamless with zero downtime.`
  }
];

