export const COMPANY_INFO = {
  name: 'BuildSoft IT Solution',
  address: 'B-5 Shivyatan complex, Somalwada square',
  city: 'Nagpur, 440025',
  phone1: '+91 7420962807',
  phone2: '+91 9730708652',
  email: 'contact@buildsoftit.com',
  supportEmail: 'contact@buildsoftit.com',
  shortDesc: 'Empowering Indian businesses with scalable, robust, and innovative digital solutions.',
  waNumber: '919730708652'
};

export type ServiceIconKey =
  | 'Globe'
  | 'Smartphone'
  | 'Code'
  | 'PenTool'
  | 'Server'
  | 'Shield';

export const SERVICES: Array<{
  id: string;
  iconKey: ServiceIconKey;
  title: string;
  shortDesc: string;
  fullDesc: string;
}> = [
  {
    id: 'web-dev',
    iconKey: 'Globe',
    title: 'Web Development',
    shortDesc: 'Custom, responsive websites with secure payment integrations.',
    fullDesc:
      'We build high-performance, scalable web applications tailored to your business. From e-commerce platforms with seamless UPI/Razorpay integrations to enterprise portals, our solutions are designed for speed, security, and mobile-first users.'
  },
  {
    id: 'app-dev',
    iconKey: 'Smartphone',
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform apps for iOS and Android.',
    fullDesc:
      "Engage your customers on the go. We specialize in React Native and Flutter for cost-effective cross-platform efficiency, ensuring your app runs smoothly on all devices while accessing native features like GPS and Push Notifications."
  },
  {
    id: 'custom-software',
    iconKey: 'Code',
    title: 'Custom ERP / CRM',
    shortDesc: 'Tailored software, inventory, and GST-ready billing solutions.',
    fullDesc:
      "Off-the-shelf software doesn't always fit. We develop bespoke ERPs, CRM systems, and billing software that integrate seamlessly with your workflows, automating manual tasks and providing deep insights into your daily operations."
  },
  {
    id: 'ui-ux',
    iconKey: 'PenTool',
    title: 'UI/UX Design',
    shortDesc: 'Intuitive, user-centered design solutions that enhance engagement.',
    fullDesc:
      'Our design process puts the user first. We create wireframes, prototypes, and high-fidelity designs that are not only visually stunning but also highly intuitive, reducing friction and increasing conversion rates for Indian consumers.'
  },
  {
    id: 'cloud-services',
    iconKey: 'Server',
    title: 'Cloud & DevOps',
    shortDesc: 'Scalable cloud architecture, AWS migration, and server management.',
    fullDesc:
      'Modernize your infrastructure. We assist with AWS, Azure, and Google Cloud migrations to ensure your app can handle sudden traffic spikes without crashing, while keeping monthly server costs optimized.'
  },
  {
    id: 'cybersecurity',
    iconKey: 'Shield',
    title: 'Security Audits',
    shortDesc: 'Comprehensive security assessments to protect customer data.',
    fullDesc:
      'Protect your business from evolving threats. We conduct thorough vulnerability assessments and penetration testing to safeguard your user data, preventing data leaks and maintaining absolute customer trust.'
  }
];

export const PORTFOLIO = [
  {
    id: 'swadeshi-emart',
    title: 'Swadeshi E-Mart',
    category: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&q=80&w=800',
    desc: 'A fully custom e-commerce platform built for a prominent retail chain, handling over 10,000 daily transactions.',
    problem:
      'The client was using a legacy platform that crashed during festive sales and offered a poor mobile experience, resulting in high cart abandonment rates.',
    solution:
      'We engineered a headless e-commerce solution using React and Node.js. We implemented AWS auto-scaling and seamless Razorpay UPI integration.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Razorpay'],
    results:
      'Achieved zero downtime during Diwali sales, reduced page load time by 60%, and increased mobile conversions by 45% within the first quarter.'
  },
  {
    id: 'aarogya-connect',
    title: 'Aarogya Connect',
    category: 'HealthTech',
    image:
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800',
    desc: 'A telemedicine app connecting rural patients with urban doctors, featuring secure video consultations and digital prescriptions.',
    problem:
      'Patients in remote areas lacked access to specialist doctors. Existing solutions consumed too much bandwidth for rural 3G/4G networks.',
    solution:
      'Developed a Flutter-based mobile application with an optimized WebRTC video streaming module that adjusts quality dynamically based on network strength.',
    tech: ['Flutter', 'Firebase', 'WebRTC', 'Express.js'],
    results:
      'Successfully connected over 50,000 rural patients to specialists. The app maintains stable video calls even on fluctuating network connections.'
  },
  {
    id: 'logitrack-pro',
    title: 'LogiTrack Solutions',
    category: 'Logistics',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    desc: 'A GPS-enabled fleet tracking and route optimization software reducing fuel costs significantly.',
    problem:
      'The logistics company had no real-time visibility into their fleet of 200+ trucks, leading to route inefficiencies and high fuel expenditures.',
    solution:
      "Built a robust IoT dashboard that integrates with GPS hardware on the trucks. Implemented a custom algorithm using Google Maps API to suggest optimal routes.",
    tech: ['Vue.js', 'Python', 'PostgreSQL', 'Google Maps API', 'IoT'],
    results:
      'Reduced average delivery times by 15% and cut monthly fuel costs by an estimated ₹2.5 Lakhs through optimized routing.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh Kulkarni',
    role: 'Founder, Swadeshi Retail',
    text: 'BuildSoft delivered our e-commerce app exactly on schedule. Their understanding of UPI integrations and Indian consumer behavior is top-notch. Highly recommended for any serious business.',
    rating: 5
  },
  {
    name: 'Dr. Anjali Deshmukh',
    role: 'Director, Aarogya Clinics',
    text: 'We were worried about hidden costs, but BuildSoft was 100% transparent. Their post-launch support is incredible. They are not just an agency, they are our technology partners.',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    role: 'CEO, LogiTrack India',
    text: 'The custom ERP they built saved us lakhs in operational inefficiencies. The team in Nagpur is highly responsive, technically sound, and very professional.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Yes! We provide 3 to 6 months of free technical support (AMC) after project delivery to ensure everything runs smoothly. After that, we offer affordable annual maintenance contracts.'
  },
  {
    question: 'Will I own the source code of my application?',
    answer:
      'Absolutely. Once the final payment is cleared, 100% ownership of the source code and intellectual property is transferred to you. No vendor lock-in.'
  },
  {
    question: 'Are there any hidden charges in your pricing?',
    answer:
      'No. We believe in complete transparency. We provide a detailed Statement of Work (SOW) before starting, outlining exact costs. Any additional features requested later are quoted separately.'
  },
  {
    question: 'Do you integrate Indian payment gateways like Razorpay, PhonePe, or Paytm?',
    answer:
      'Yes, we specialize in seamless integration of all major Indian payment gateways, including direct UPI intent flows, to ensure your customers have a smooth checkout experience.'
  }
];
