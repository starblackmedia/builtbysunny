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
    technologies: ['Next.js', 'TypeScript', 'Cryptography', 'Node.js'],
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
    description: 'A high-security encrypted cloud storage repository built for safeguarding operational config secrets and server credential protocols.',
    role: 'Backend Architect',
    technologies: ['Node.js', 'Security Layers', 'Databases', 'TypeScript'],
    problemStatement: 'Distributed architecture deployments often suffer from leaking local environment files or static access strings embedded inside client-side public repositories.',
    designApproach: 'Built zero-knowledge database schemas guarded by rigorous automated secret rotation schedules triggered upon system access thresholds.',
    tradeoffs: 'Imposed fractional sub-millisecond execution latencies on runtime decryption routines to guarantee absolute safety over continuous data rest frames.',
    liveUrl: 'https://app.ironlockbox.com',
    placeholderImageId: 'cs-ironlockbox',
    hasFullContent: true
  },
  starblackmedia: {
    id: 'starblackmedia',
    name: 'Starblack Media',
    category: 'Enterprise Production Suite',
    description: 'High-throughput automated asset distribution network for heavy broadcast pipelines.',
    role: 'Lead Full-Stack Architect',
    technologies: ['Next.js', 'Cloud Compute', 'APIs'],
    problemStatement: 'Traditional broadcast systems suffer from severe delays during asset rendering transformations and delivery synchronization to downstream global networks.',
    designApproach: 'Deployed cloud compute arrays handling massive concurrent video files asynchronously via distributed queue workers.',
    tradeoffs: 'Allocated higher memory capacities to node clusters to decrease asset conversion times by 70%, increasing immediate operation metrics.',
    liveUrl: 'https://starblackmedia.com',
    placeholderImageId: 'cs-starblackmedia',
    hasFullContent: true
  },
  pureprestige: {
    id: 'pureprestige',
    name: 'Pure Prestige',
    category: 'Premium Experience Ecosystem',
    description: 'Bespoke client management solution crafted for ultra-high-end luxury brands.',
    role: 'Lead Product Developer',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    problemStatement: 'Luxury hospitality networks demand zero-latency customer request orchestration combined with absolute aesthetic fidelity across distributed device categories.',
    designApproach: 'Built a pristine visual presentation interface featuring atomic typography layout schemas and clean zero-dependency layout transitions.',
    tradeoffs: 'Designed strictly around widescreen lifestyle desktop layouts, requiring simplified adaptive content flow layers on smaller mobile screens.',
    liveUrl: 'https://purprestige.com',
    placeholderImageId: 'cs-pureprestige',
    hasFullContent: true
  }
};
