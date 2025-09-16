import { SiteConfig, NavConfig, SidebarItem, SidebarSection } from '@/types';

// Site Configuration
export const siteConfig: SiteConfig = {
  name: 'Nexlayer Documentation',
  description: 'Official documentation for Nexlayer - Agent-native cloud platform',
  url: 'https://docs.nexlayer.com',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/nexlayer',
    github: 'https://github.com/Nexlayer/documentation',
    discord: 'https://discord.gg/U26X9mmYnP',
  },
};

// Main Navigation
export const mainNav: SidebarItem[] = [
  {
    title: 'Documentation',
    href: '/docs',
    description: 'Learn how to use Nexlayer',
  },
  {
    title: 'API Reference',
    href: '/api-reference',
    description: 'Complete API documentation',
  },
  {
    title: 'Learn',
    href: '/learn',
    description: 'Tutorials and guides',
  },
  {
    title: 'Launchfile',
    href: '/launchfile',
    description: 'YAML configuration examples',
  },
  {
    title: 'FAQ',
    href: '/faq',
    description: 'Frequently asked questions',
  },
];

// Sidebar Navigation
export const sidebarNav: SidebarSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs/getting-started/introduction',
        description: 'Welcome to Nexlayer',
      },
      {
        title: 'Quick Start',
        href: '/docs/getting-started/quick-start',
        description: 'Deploy your first app',
      },
      {
        title: 'Installation',
        href: '/docs/getting-started/installation',
        description: 'Set up Nexlayer CLI',
      },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      {
        title: 'Applications',
        href: '/docs/core-concepts/applications',
        description: 'Understanding applications',
      },
      {
        title: 'Pods',
        href: '/docs/core-concepts/pods',
        description: 'Container orchestration',
      },
      {
        title: 'Networking',
        href: '/docs/core-concepts/networking',
        description: 'Service discovery and routing',
      },
      {
        title: 'Storage',
        href: '/docs/core-concepts/storage',
        description: 'Persistent volumes',
      },
    ],
  },
  {
    title: 'Deployment',
    items: [
      {
        title: 'YAML Configuration',
        href: '/docs/deployment/yaml-configuration',
        description: 'Writing nexlayer.yaml',
      },
      {
        title: 'Deployment Process',
        href: '/docs/deployment/process',
        description: 'Step-by-step deployment',
      },
      {
        title: 'Environment Variables',
        href: '/docs/deployment/environment-variables',
        description: 'Managing app configuration',
      },
      {
        title: 'Custom Domains',
        href: '/docs/deployment/custom-domains',
        description: 'Setting up custom domains',
      },
    ],
  },
  {
    title: 'Advanced',
    items: [
      {
        title: 'MCP Integration',
        href: '/docs/advanced/mcp',
        description: 'Model Context Protocol',
      },
      {
        title: 'CI/CD Integration',
        href: '/docs/advanced/ci-cd',
        description: 'Automated deployments',
      },
      {
        title: 'Monitoring',
        href: '/docs/advanced/monitoring',
        description: 'App monitoring and logs',
      },
      {
        title: 'Scaling',
        href: '/docs/advanced/scaling',
        description: 'Auto-scaling and performance',
      },
    ],
  },
  {
    title: 'Templates',
    items: [
      {
        title: 'PERN Stack',
        href: '/docs/templates/pern-stack',
        description: 'PostgreSQL + Express + React + Node.js',
      },
      {
        title: 'Next.js FullStack',
        href: '/docs/templates/nextjs-fullstack',
        description: 'Next.js with PostgreSQL and Drizzle',
      },
      {
        title: 'MERN Stack',
        href: '/docs/templates/mern-stack',
        description: 'MongoDB + Express + React + Node.js',
      },
      {
        title: 'AI Applications',
        href: '/docs/templates/ai-applications',
        description: 'AI-powered applications',
      },
    ],
  },
  {
    title: 'Reference',
    items: [
      {
        title: 'CLI Reference',
        href: '/docs/reference/cli',
        description: 'Command line interface',
      },
      {
        title: 'API Reference',
        href: '/api-reference',
        description: 'REST API documentation',
      },
      {
        title: 'Troubleshooting',
        href: '/docs/reference/troubleshooting',
        description: 'Common issues and solutions',
      },
      {
        title: 'Changelog',
        href: '/docs/reference/changelog',
        description: 'Release notes and updates',
      },
    ],
  },
];

// Learn Section Navigation
export const learnNav: SidebarSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Welcome',
        href: '/learn/welcome',
        description: 'Introduction to Nexlayer',
      },
      {
        title: 'Quick Start',
        href: '/learn/getting-started',
        description: 'Deploy your first application',
      },
      {
        title: 'MCP Quickstart',
        href: '/learn/mcp-quickstart',
        description: 'Get started with MCP',
      },
    ],
  },
  {
    title: 'Tutorials',
    items: [
      {
        title: 'MCP Tutorial',
        href: '/learn/mcp-tutorial',
        description: 'Build with Model Context Protocol',
      },
      {
        title: 'MCP Examples',
        href: '/learn/mcp-examples',
        description: 'Real-world MCP examples',
      },
      {
        title: 'Manual Deployment',
        href: '/learn/manual',
        description: 'Step-by-step manual deployment',
      },
    ],
  },
  {
    title: 'Templates',
    items: [
      {
        title: 'Template Gallery',
        href: '/learn/templates',
        description: 'Browse all templates',
      },
      {
        title: 'PERN App',
        href: '/learn/templates/pern-app',
        description: 'Todo app with PERN stack',
      },
      {
        title: 'Next.js Hello World',
        href: '/learn/templates/nextjs-hello-world',
        description: 'Simple Next.js application',
      },
      {
        title: 'Custom FullStack',
        href: '/learn/templates/custom-fullstack',
        description: 'Custom full-stack application',
      },
    ],
  },
  {
    title: 'Advanced',
    items: [
      {
        title: 'YAML Configuration',
        href: '/learn/yaml-configuration',
        description: 'Advanced YAML configuration',
      },

      {
        title: 'Advanced YAML',
        href: '/learn/advanced/yaml-configuration',
        description: 'Advanced YAML features',
      },

      {
        title: 'API Reference',
        href: '/learn/advanced/api-reference',
        description: 'API documentation',
      },
      {
        title: 'CLI Tools',
        href: '/learn/advanced/cli-tools',
        description: 'Command line tools',
      },
    ],
  },
];

// Launchfile Section Navigation
export const launchfileNav: SidebarSection[] = [
  {
    title: 'Examples',
    items: [
      {
        title: 'Simple Website',
        href: '/launchfile#simple-website',
        description: 'Basic static website',
      },
      {
        title: 'PERN Stack',
        href: '/launchfile#pern-stack',
        description: 'PostgreSQL + Express + React + Node.js',
      },
      {
        title: 'Next.js FullStack',
        href: '/launchfile#nextjs-fullstack',
        description: 'Next.js with PostgreSQL and Drizzle',
      },
      {
        title: 'FullStack AI',
        href: '/launchfile#fullstack-ai',
        description: 'AI-powered application with Gemini',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Cheatsheet',
        href: '/launchfile/cheatsheet',
        description: 'Quick reference guide',
      },
      {
        title: 'Recipes',
        href: '/launchfile/recipes',
        description: 'Common configuration patterns',
      },
      {
        title: 'Advanced',
        href: '/launchfile/advanced',
        description: 'Advanced configuration options',
      },
      {
        title: 'Troubleshooting',
        href: '/launchfile/troubleshooting',
        description: 'Common issues and solutions',
      },
    ],
  },
];

// Footer Links
export const footerLinks = {
  product: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Documentation', href: '/docs' },
    { title: 'API Reference', href: '/api-reference' },
  ],
  resources: [
    { title: 'Blog', href: '/blog' },
    { title: 'Tutorials', href: '/learn' },
    { title: 'Templates', href: '/learn/templates' },
    { title: 'FAQ', href: '/faq' },
  ],
  company: [
    { title: 'About', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' },
    { title: 'Support', href: '/support' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
  ],
};

// Social Links
export const socialLinks = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/nexlayer',
    icon: 'twitter',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/Nexlayer',
    icon: 'github',
  },
  {
    title: 'Discord',
    href: 'https://discord.gg/EBW93bQZ',
    icon: 'discord',
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/company/nexlayer',
    icon: 'linkedin',
  },
];

// Export navigation config
export const navConfig: NavConfig = {
  mainNav,
  sidebarNav,
};

// Default metadata
export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'nexlayer',
    'cloud platform',
    'deployment',
    'containers',
    'kubernetes',
    'yaml',
    'documentation',
    'api',
    'mcp',
    'model context protocol',
  ],
  authors: [{ name: 'Nexlayer Team' }],
  creator: 'Nexlayer Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@nexlayer',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
