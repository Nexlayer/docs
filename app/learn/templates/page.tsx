'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  FileText,
  Code,
  Database,
  Globe,
  Settings,
  ExternalLink,
  Play,
} from 'lucide-react';

export default function TemplatesPage() {
  const templates = [
    {
      title: 'Hello World NextJS',
      description: 'Simple NextJS application with Nginx',
      icon: <Code className='h-6 w-6 text-[#22B4C8]' />,
      path: '/learn/templates/nextjs-hello-world',
      features: ['NextJS', 'Nginx', 'Docker', 'TypeScript', 'Production Ready'],
      complexity: 'Beginner',
      color: 'bg-green-500',
    },
    {
      title: 'Custom Fullstack',
      description: 'Custom fullstack template with Cloudbeaver included',
      icon: <Settings className='h-6 w-6 text-[#22B4C8]' />,
      path: '/learn/templates/custom-fullstack',
      features: [
        'Custom Stack',
        'Cloudbeaver',
        'Database Management',
        'Fullstack',
      ],
      complexity: 'Advanced',
      color: 'bg-orange-500',
    },
    {
      title: 'PERN App',
      description: 'PostgreSQL, Express, React, and Node.js',
      icon: <Code className='h-6 w-6 text-[#22B4C8]' />,
      path: '/learn/templates/pern-app',
      features: ['PostgreSQL', 'Express', 'React', 'Node.js', 'PERN Stack'],
      complexity: 'Intermediate',
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10'>
          <div className='text-center mb-8'>
            <div className='flex justify-center mb-4'>
              <div className='w-16 h-16 bg-[#22B4C8] rounded-full flex items-center justify-center'>
                <FileText className='h-8 w-8 text-black' />
              </div>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>
              Templates
            </h1>
            <p className='text-xl text-gray-300'>
              Browse and use project templates from the Nexlayer Playground
            </p>
          </div>

          {/* Introduction */}
          <div className='max-w-[1216px] mx-auto mb-12'>
            <div className='bg-[#0a0a0a] rounded-xl p-8 border border-[#333]'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Ready-to-Use Templates
              </h2>
              <p className='text-gray-300 mb-6'>
                These templates are sourced from the
                <a
                  href='https://github.com/Nexlayer/playground'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#22B4C8] hover:underline ml-1'
                >
                  Nexlayer Playground repository
                </a>
                . Each template includes a complete YAML configuration that you
                can deploy instantly or customize to fit your needs.
              </p>
            </div>
          </div>

          {/* Templates Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12'>
            {templates.map((template, index) => (
              <div
                key={index}
                className='flex flex-col justify-between bg-[#0a0a0a] rounded-xl p-6 border border-[#333] hover:border-[#22B4C8] transition-colors'
              >
                <div className='flex max-[1440px]:flex-col-reverse items-start justify-between mb-4'>
                  <div className='flex items-start gap-3'>
                    {template.icon}
                    <h3 className='text-xl font-bold text-white'>
                      {template.title}
                    </h3>
                  </div>
                  <div
                    className={`${template.color} max-[1440px]:mb-3 text-white text-xs px-2 py-1 rounded-full font-medium`}
                  >
                    {template.complexity}
                  </div>
                </div>

                <p className='text-gray-300 mb-4'>{template.description}</p>
                <div>
                  <div className='mb-4'>
                    <h4 className='text-white font-medium mb-2'>Features:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {template.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className='text-[#22B4C8] text-sm'
                        >
                          {feature}
                          {featureIndex < template.features.length - 1
                            ? ' •'
                            : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link href={template.path}>
                      <Button className='w-full bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-4 py-2 rounded-lg text-sm'>
                        <Play className='h-4 w-4 mr-2' />
                        View Template
                      </Button>
                    </Link>
                    <a
                      href='https://app.nexlayer.io/playground/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button
                        variant='outline'
                        className='mt-2 w-full border-[#333] text-gray-300 hover:bg-[#111] px-4 py-2 rounded-lg text-sm'
                      >
                        <ExternalLink className='h-4 w-4 mr-2' />
                        Try in Playground
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className='text-center'>
            <div className='bg-[#0a0a0a] rounded-xl p-10 border border-[#333] max-w-2xl mx-auto'>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Ready to Deploy?
              </h3>
              <p className='text-gray-300 mb-8'>
                Try these templates in the Nexlayer Playground for instant
                deployment.
              </p>
              <div className='flex flex-col md:flex-row justify-center gap-4'>
                <a
                  href='https://app.nexlayer.io/playground/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-8 py-6 rounded-full text-lg'>
                    Open Playground
                  </Button>
                </a>
                <Link href='/learn/mcp-quickstart'>
                  <Button
                    variant='outline'
                    className='max-w-[212px] w-full border-[#22B4C8] text-white hover:bg-[#111] hover:text-[#22B4C8] px-8 py-6 rounded-full text-lg'
                  >
                    Learn MCP
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
