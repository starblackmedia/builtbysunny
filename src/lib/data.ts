import { Shield, Lock, Database, Zap, Scaling } from 'lucide-react';

export const modules = [
  {
    slug: 'auth',
    title: 'Authentication',
    icon: Lock,
    description: 'User identity and access control.',
  },
  {
    slug: 'data',
    title: 'Data Management',
    icon: Database,
    description: 'Storage, retrieval, and processing.',
  },
  {
    slug: 'realtime',
    title: 'Real-time Systems',
    icon: Zap,
    description: 'Low-latency communication.',
  },
  {
    slug: 'security',
    title: 'Security',
    icon: Shield,
    description: 'System and data protection.',
  },
  {
    slug: 'scaling',
    title: 'Scaling & Performance',
    icon: Scaling,
    description: 'Handling growth and high load.',
  },
];
