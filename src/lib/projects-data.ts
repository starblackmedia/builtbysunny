import { PlaceHolderImages, ImagePlaceholder } from './placeholder-images';

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  status: 'Shipped' | 'In Progress' | 'Experiment';
  category: 'Web' | 'Mobile' | 'Backend' | 'AI / Experiments';
  insight: string;
  problem: string;
  design: string;
  tradeoffs: string;
  architectureSVG: string;
  image: ImagePlaceholder;
};

const placeholderSVG = `<svg width="100%" height="100%" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="rounded-lg">
<rect width="400" height="220" fill="#1a1a1a"/>
<g transform="translate(20 20)">
  <rect x="0" y="0" width="100" height="50" rx="4" fill="#333" stroke="#00ffff" stroke-width="2"/>
  <text x="50" y="30" font-family="monospace" font-size="14" fill="#f5f5f5" text-anchor="middle">Client (Web/Mobile)</text>
</g>
<path d="M120 45 h40" stroke="#f5f5f5" stroke-dasharray="4 2" stroke-width="1.5"/>
<g transform="translate(160 20)">
  <rect x="0" y="0" width="100" height="50" rx="4" fill="#333" stroke="#00ffff" stroke-width="2"/>
  <text x="50" y="30" font-family="monospace" font-size="14" fill="#f5f5f5" text-anchor="middle">API Gateway</text>
</g>
<path d="M260 45 h40" stroke="#f5f5f5" stroke-dasharray="4 2" stroke-width="1.5"/>
<g transform="translate(300 20)">
  <rect x="0" y="0" width="80" height="50" rx="4" fill="#333" stroke="#00ffff" stroke-width="2"/>
  <text x="40" y="30" font-family="monospace" font-size="14" fill="#f5f5f5" text-anchor="middle">Database</text>
</g>
<path d="M210 70 v20" stroke="#f5f5f5" stroke-dasharray="4 2" stroke-width="1.5"/>
<g transform="translate(160 90)">
  <rect x="0" y="0" width="100" height="50" rx="4" fill="#333" stroke="#ff6b35" stroke-width="2"/>
  <text x="50" y="30" font-family="monospace" font-size="14" fill="#f5f5f5" text-anchor="middle">Auth Service</text>
</g>
<path d="M210 140 v20" stroke="#f5f5f5" stroke-dasharray="4 2" stroke-width="1.5"/>
<g transform="translate(160 160)">
  <rect x="0" y="0" width="100" height="50" rx="4" fill="#333" stroke="#ff6b35" stroke-width="2"/>
  <text x="50" y="30" font-family="monospace" font-size="14" fill="#f5f5f5" text-anchor="middle">AI Model</text>
</g>
</svg>`;

export const projectsData: Project[] = [
  {
    name: 'Real-time Analytics Dashboard',
    description:
      'A web application for visualizing user activity in real-time.',
    technologies: ['Next.js', 'Firebase', 'Recharts'],
    status: 'Shipped',
    category: 'Web',
    insight:
      'Solved the challenge of rendering high-frequency updates without sacrificing performance.',
    problem:
      'The business needed a way to monitor live user engagement to make quick decisions.',
    design:
      'Used Firebase Realtime Database to stream data to a Next.js frontend. Leveraged server-sent events for efficient data transfer and Recharts for interactive visualizations.',
    tradeoffs:
      'Chose Firebase for its ease of use and real-time capabilities, accepting potential scaling limitations compared to a custom WebSocket solution.',
    architectureSVG: placeholderSVG,
    image: PlaceHolderImages.find((p) => p.id === 'experiment2') || PlaceHolderImages[0],
  },
  {
    name: 'Flutter E-commerce App',
    description:
      'A cross-platform mobile app for a boutique online store, with a focus on a smooth user experience.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    status: 'In Progress',
    category: 'Mobile',
    insight:
      'Focused on state management with Provider to create a highly responsive and testable application architecture.',
    problem:
      'The client wanted a native-like mobile presence on both iOS and Android with a single codebase to reduce development costs.',
    design:
      'A Flutter application using Firebase for authentication, Firestore for the product catalog, and Cloud Functions for payment processing.',
    tradeoffs:
      "Flutter's single codebase is efficient, but required learning a new framework and language (Dart). Some native-specific features required custom platform channels.",
    architectureSVG: placeholderSVG,
    image: PlaceHolderImages.find((p) => p.id === 'decision2') || PlaceHolderImages[0],
  },
  {
    name: 'Serverless API for IoT',
    description:
      'A highly-scalable backend to ingest and process data from thousands of IoT devices.',
    technologies: ['Firebase', 'Cloud Functions', 'Node.js'],
    status: 'Shipped',
    category: 'Backend',
    insight:
      'Implemented a robust error handling and retry mechanism in Cloud Functions to ensure data integrity from unreliable devices.',
    problem:
      'Needed a cost-effective and scalable backend to handle unpredictable bursts of data from a fleet of IoT sensors.',
    design:
      'An event-driven architecture using Google Cloud Pub/Sub to decouple data ingestion from processing. Cloud Functions processed and stored the data in Firestore.',
    tradeoffs:
      'Serverless architecture minimized operational overhead, but cold starts occasionally introduced latency, which was mitigated using provisioned concurrency.',
    architectureSVG: placeholderSVG,
    image: PlaceHolderImages.find((p) => p.id === 'experiment3') || PlaceHolderImages[0],
  },
  {
    name: 'AI Content Summarizer',
    description:
      'An experimental tool to summarize long articles using generative AI.',
    technologies: ['Next.js', 'AI', 'Genkit'],
    status: 'Experiment',
    category: 'AI / Experiments',
    insight:
      'Fine-tuning the prompt was the most critical factor in achieving high-quality, coherent summaries from the AI model.',
    problem:
      'Exploring how Large Language Models can be applied to practical problems like information overload.',
    design:
      'A simple Next.js interface that calls a Genkit flow. The flow takes user-provided text, sends it to a Google AI model with a carefully crafted prompt, and streams the summary back.',
    tradeoffs:
      'Using a pre-trained model is fast, but offers less control than training a custom model. Prompt engineering is more of an art than a science.',
    architectureSVG: placeholderSVG,
    image: PlaceHolderImages.find((p) => p.id === 'experiment1') || PlaceHolderImages[0],
  },
];
