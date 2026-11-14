export interface CaseStudy {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  problemStatement: string;
  designApproach: string;
  tradeoffs: string;
  liveUrl: string;
  placeholderImageId: string;
  hasFullContent: boolean;
}

export const caseStudiesData: Record<string, CaseStudy> = {
  tunegrock: {
    id: 'tunegrock',
    name: 'TuneGrock',
    category: 'Music Technology Platform',
    description: 'A music technology platform built to help independent artists manage, distribute, and grow their careers with intelligent performance insights.',
    role: 'Founder & Full-Stack Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'AI', 'APIs', 'Payments'],
    problemStatement: 'Independent musicians struggle to navigate complex royalty distribution frameworks, lack centralized analytics for streams across multiple major platforms, and routinely give up excessive ownership equity to traditional predatory label gatekeepers.',
    designApproach: 'Engineered an event-driven system architecture capable of ingestion from upstream audio analytics endpoints. Built a responsive web wrapper coupled with an automated micro-payment split infrastructure to disburse direct earnings to artists securely.',
    tradeoffs: 'Prioritized development velocity and ease of deployment by leveraging unified API proxies, accepting higher external platform request coupling that will require distributed caching layers as transaction volumes expand.',
    liveUrl: 'https://tunegrock.com',
    placeholderImageId: 'cs-tunegrock',
    hasFullContent: true
  },
  dropkudi: {
    id: 'dropkudi',
    name: 'DropKudi',
    category: 'Modern Gifting Platform',
    description: 'A modern gifting platform that gives people a dedicated, secure page to receive gifts, congratulations, and support for birthdays, weddings, celebrations, and special life events.',
    role: 'Founder & Full-Stack Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'APIs', 'Payments'],
    problemStatement: 'Traditional crowdfunding tools feel excessively clinical or transactional for intimate celebrations, while direct peer transfer links lack personal greeting messages, real-time registry verification, and secure cross-border handling.',
    designApproach: 'Crafted a modern layout that provides rapid personalized landing page provisioning. Integrates clean escrow gateways to bundle high-frequency small gifts into consolidated, low-overhead direct bank settlement transfers.',
    tradeoffs: 'Chose a single highly interactive state container on the client for custom page builders to reduce early server orchestration cost, trading off initial cold-start times on heavy media renders which are now pre-cached dynamically.',
    liveUrl: 'https://dropkudi.com',
    placeholderImageId: 'cs-dropkudi',
    hasFullContent: true
  },
  proofen: {
    id: 'proofen',
    name: 'Proofen',
    category: 'Product Verification Tool',
    description: 'An advanced cryptographic digital ledger solution for certifying asset authenticity and tracing item lifecycles seamlessly.',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'TypeScript', 'Cryptography', 'Node.js', 'AI'],
    problemStatement: 'Supply chains lack unalterable, fast decentralized record confirmation mechanisms, leading to widespread counterfeits and manual authentication delays across global logistics lines.',
    designApproach: 'Utilized instant client-side file hashes matched asynchronously against secured verification blocks to prove origination timelines securely with immediate ledger confirmation.',
    tradeoffs: 'Traded away legacy framework browser support to rely exclusively on modern lightweight WebCrypto browser native APIs, guaranteeing optimum security loops.',
    liveUrl: 'https://useprofeen.com',
    placeholderImageId: 'cs-proofen',
    hasFullContent: true
  },
  ironlockbox: {
    id: 'ironlockbox',
    name: 'IronLockBox',
    category: 'Secure Storage Vault',
    description: 'IronLockBox is a digital security and storage platform designed to give users a secure place to store and manage important information and digital assets. The product focuses on privacy, organization, and controlled access, providing a structured experience for keeping sensitive information in one place.',
    role: 'Full-Stack Developer & Backend Architect',
    technologies: ['Flutter', 'Security Layers', 'Databases', 'Dart', 'TypeScript'],
    problemStatement: 'Distributed architecture deployments often suffer from leaking local environment files or static access strings embedded inside client-side public repositories. The project required creating an experience that feels simple and approachable while dealing with a product category that requires a strong focus on security, reliability, and user trust.',
    designApproach: 'Built zero-knowledge database schemas guarded by rigorous automated secret rotation schedules triggered upon system access thresholds, implementing application flows and connecting the frontend to backend services safely.',
    tradeoffs: 'Imposed fractional sub-millisecond execution latencies on runtime decryption routines to guarantee absolute safety over continuous data rest frames.',
    liveUrl: 'https://app.ironlockbox.com',
    placeholderImageId: 'cs-ironlockbox',
    hasFullContent: true
  },
  starblackmedia: {
    id: 'starblackmedia',
    name: 'Starblack Media',
    category: 'Enterprise Production Suite',
    description: 'Starblack Media is a digital product and software development studio focused on building modern websites, web applications, SaaS products, and custom digital systems for businesses and organizations. The studio was created to combine product thinking, design, and engineering into practical digital solutions.',
    role: 'Lead Full-Stack Architect',
    technologies: ['Next.js', 'Cloud Compute', 'APIs', 'Databases'],
    problemStatement: 'Traditional broadcast systems suffer from severe delays during asset rendering transformations and delivery synchronization to downstream global networks. The studio website is designed to communicate capabilities, showcase its work, and present its holistic approach to building custom systems.',
    designApproach: 'Deployed cloud compute arrays handling massive concurrent video files asynchronously via distributed queue workers. Covers frontend development, backend systems, APIs, database integrations, UI implementation, and optimized target deployments.',
    tradeoffs: 'Allocated higher memory capacities to node clusters to decrease asset conversion times by 70%, increasing immediate operation metrics.',
    liveUrl: 'https://starblackmedia.com',
    placeholderImageId: 'cs-starblackmedia',
    hasFullContent: true
  },
  pureprestige: {
    id: 'pureprestige',
    name: 'Pure Prestige',
    category: 'Premium Experience Ecosystem',
    description: 'PurePrestige is a cleaning service web application designed to make it easier for customers to discover cleaning services and book appointments online. The platform provides a convenient experience where customers can select cleaning service types, provide booking information, and choose suitable schedules.',
    role: 'Lead Product Developer & Full-Stack Developer',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Booking Engines'],
    problemStatement: 'Luxury hospitality networks demand zero-latency customer request orchestration combined with absolute aesthetic fidelity across distributed device categories. The goal was to turn a traditional booking process into a convenient digital experience while keeping the interface clear.',
    designApproach: 'Built a pristine visual presentation interface featuring atomic typography layout schemas, implementing the automated booking flow foundations, and crafting zero-dependency layout transitions.',
    tradeoffs: 'Designed strictly around widescreen lifestyle desktop layouts, requiring simplified adaptive content flow layers on smaller mobile screens.',
    liveUrl: 'https://studio--prestige-clean-landing.us-central1.hosted.app',
    placeholderImageId: 'cs-pureprestige',
    hasFullContent: true
  }
};
