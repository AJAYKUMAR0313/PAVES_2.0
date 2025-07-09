// src/data/landingContent.js

export const hero = {
  headline: 'Powering the Next-Wave of finance with AI',
  subheadline: 'Partnering for digital transformation and enterprise AI.',
  cta: {
    label: "Let's Connect",
    href: '/what-we-do',
  },
  image: {
    src: '/assets/home_ai.png',
    alt: 'Hero',
    width: 500,
    height: 400,
  },
  background: "/assets/hero-bg.jpg"
};

export const features = [
  { icon: '🤖', text: 'AI-driven Solutions' },
  { icon: '🔗', text: 'Enterprise Integration' },
  { icon: '🤝', text: 'Trusted Partnerships' },
  { icon: '🚀', text: 'Innovation at Scale' },
];

export const services = {
  image: {
    src: '/assets/home_ai.png',
    alt: 'Service',
    width: 400,
    height: 250,
  },
  description: 'Partner through innovation. We deliver enterprise AI and digital transformation that enhances performance and trust.'
};

export const industryVerticals = {
  description: "Boost your chatbot's capabilities with easy automation and real-time decisioning through enterprise integrations."
};

export const partners = {
  image: {
    src: '/assets/partnership.jpg',
    alt: 'Partners',
    width: 400,
    height: 250,
  },
  description: 'Strategic alliances with AWS, Microsoft, and VMWare to enhance transformation programs.'
};

export const joinUs = {
  headline: 'Join Us',
  description: 'Looking to make an impact? Check our open roles and grow your career with us.',
  cta: {
    label: 'View Careers',
    href: '/careers',
  },
};

export const footer = {
  about: [
    { label: 'Company', href: '/who-we-are/about' },
    { label: 'Contact', href: '/contact' },
  ],
  focusAreas: [
    { label: 'AI Labs', href: '/insights/ai-labs' },
    { label: 'Services', href: '/what-we-do/services' },
  ],
  industryVerticals: ['Finance', 'Healthcare'],
  connect: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
}; 