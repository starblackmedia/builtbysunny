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
    liveUrl: '#',
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
    liveUrl: '#',
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
    problemStatement: 'Supply chains lack unalterable, fast decentralized record confirmation mechanisms, leading to widespread counterfeits and manual authentication delays.',
    designApproach: 'Utilized instant client-side file hashes matched asynchronously against secured verification blocks to prove origination timelines securely.',
    tradeoffs: 'Traded away legacy framework browser support to rely exclusively on modern lightweight WebCrypto browser APIs.',
    liveUrl: '#',
    placeholderImageId: 'cs-proofen',
    hasFullContent: false
  },
  ironlockbox: {
    id: 'ironlockbox',
    name: 'IronLockBox',
    category: 'Secure Storage Vault',
    description: 'A high-security encrypted cloud storage repository built for safeguarding operational config secrets and server credential protocols.',
    role: 'Backend Architect',
    technologies: ['Node.js', 'Security Layers', 'Databases', 'TypeScript'],
    problemStatement: 'Distributed architecture deployments often suffer from leaking local environment files or static access strings embedded inside client repositories.',
    designApproach: 'Built zero-knowledge database schemas guarded by rigorous automated secret rotation schedules triggered upon system access thresholds.',
    tradeoffs: 'Imposed fractional sub-millisecond execution latencies on runtime decryption routines to guarantee absolute safety over continuous data rest frames.',
    liveUrl: '#',
    placeholderImageId: 'cs-ironlockbox',
    hasFullContent: false
  },
  supernovaa: {
    id: 'supernovaa',
    name: 'Supernovaa',
    category: 'AI Pipeline Platform',
    description: 'A real-time data automation hub processing smart content predictions.',
    role: 'AI Engineer',
    technologies: ['Next.js', 'AI Integration', 'Node.js'],
    problemStatement: 'Case study compilation pending operational catalog synchronization.',
    designApproach: 'Integrated predictive LLM nodes to structure incoming dynamic data streams.',
    tradeoffs: 'Optimized pipeline triggers for speed, accepting cached model outputs for recurring queries.',
    liveUrl: '#',
    placeholderImageId: 'project-ai',
    hasFullContent: false
  },
  unrulymusik: {
    id: 'unrulymusik',
    name: 'UnRulyMusik',
    category: 'Audio Architecture Log',
    description: 'Decentralized media storage pipeline serving low-latency web streams.',
    role: 'Core Systems Developer',
    technologies: ['Node.js', 'APIs', 'Databases'],
    problemStatement: 'Case study compilation pending operational catalog synchronization.',
    designApproach: 'Configured automated chunk-streaming modules ensuring progressive web distribution.',
    tradeoffs: 'Traded off structural ingestion speed for perfect delivery reliability on high-load connection matrices.',
    liveUrl: '#',
    placeholderImageId: 'music1',
    hasFullContent: false
  },
  starblackmedia: {
    id: 'starblackmedia',
    name: 'Starblack Media',
    category: 'Enterprise Production Suite',
    description: 'High-throughput automated asset distribution network for heavy broadcast pipelines.',
    role: 'Lead Full-Stack Architect',
    technologies: ['Next.js', 'Cloud Compute', 'APIs'],
    problemStatement: 'Case study compilation pending operational catalog synchronization.',
    designApproach: 'Deployed cloud compute arrays handling massive concurrent video files asynchronously.',
    tradeoffs: 'Allocated higher memory capacities to node clusters to decrease asset conversion times by 70%.',
    liveUrl: '#',
    placeholderImageId: 'experiment1',
    hasFullContent: false
  },
  pureprestige: {
    id: 'pureprestige',
    name: 'Pure Prestige',
    category: 'Premium Experience Ecosystem',
    description: 'Bespoke client management solution crafted for ultra-high-end luxury brands.',
    role: 'Lead Product Developer',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    problemStatement: 'Case study compilation pending operational catalog synchronization.',
    designApproach: 'Built a pristine visual presentation interface featuring atomic typography and clean zero-dependency animations.',
    tradeoffs: 'Designed strictly around widescreen lifestyle desktop layouts, requiring simplified flow layers on smaller screens.',
    liveUrl: '#',
    placeholderImageId: 'experiment2',
    hasFullContent: false
  }
};
