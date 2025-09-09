'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bot, Sparkles, Zap, CheckCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const techTabs = [
  { name: 'Cursor', description: 'AI-first code editor' },
  { name: 'Claude Code', description: "Anthropic's AI-powered CLI" },
  { name: 'VS Code', description: 'Using Command Pallete' },
  { name: 'Other Tools', description: 'Any MCP-compatible AI IDE or CLI' },
];

const techContent = [
  {
    title: 'Cursor Setup',
    description: 'Create or update your .cursor/mcp.json file:',
    codeText: 'Cursor — .cursor/mcp.json',
    code: `{
  "mcpServers": {
    "nexlayer_mcp": {
      "url": "https://mcp.nexlayer.ai/api/mcp",
      "headers": {
        "Authorization": "Bearer <NEXLAYER_MCP_TOKEN>"
      }
    }
  }
}`,
  },
  {
    title: 'Claude Setup',
    description: 'Use the CLI command to add Nexlayer MCP:',
    codeText: 'CLI command',
    code: `claude mcp add nexlayer-mcp --transport sse https://mcp.nexlayer.ai/api/mcp --header "Authorization: Bearer <YOUR_NEXLAYER_TOKEN>"`,
  },
  {
    title: 'VS Code Setup',
    description: 'Nexlayer MCP Setup Instructions for VS Code:',
    codeText: 'MCP Server URL',
    steps: [
      'Open the Command Palette in VS Code 2 (Ctrl+Shift+P on Windows/Linux, Cmd+Shift+P on macOS)',
      'Search and select the "MCP: Add Server" command',
      'Select HTTP (HTTP or Server-Sent Events)',
      "Enter 'https://mcp.nexlayer.ai/api/mcp' for the Server URL",
      "Enter 'nexlayer-mcp' for the Server ID",
      'In the nexlayer-mcp object, add the following lines of code:',
      {
        type: 'code',
        value: `"nexlayer-mcp": {
  "url": "https://mcp.nexlayer.ai/api/mcp",
  "type": "http",
  "headers": {
    "Authorization": "Bearer <NEXLAYER_MCP_TOKEN>"
  }
}`
      },
      'Save and begin prompting with Github Copilot!',
    ],
  },
  {
    title: 'Other MCP-Compatible Tools',
    description: 'For other tools, use the MCP server URL:',
    codeText: 'MCP Server URL',
    code: `https://mcp.nexlayer.ai/api/mcp`,
  },
];

export default function MCPQuickStartPage() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [copiedTab, setCopiedTab] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const handleTabCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(true);
    setTimeout(() => setCopiedTab(false), 2000);
  };

  const deploymentCommand =
    'Deploy my project to nexlayer @https://github.com/Nexlayer/ai-code-arena';

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10'>
          <div className='text-center mb-8'>
            <div className='flex justify-center mb-4'>
              <div className='w-16 h-16 bg-[#22B4C8] rounded-full flex items-center justify-center'>
                <Bot className='h-8 w-8 text-black' />
              </div>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>
              Quick Start with MCP
            </h1>
            <p className='text-xl text-gray-300'>
              Deploy your first app using your MCP supported AI IDE or CLI.
            </p>
          </div>

          {/* What is MCP */}
          <div className='max-w-4xl mx-auto mb-12'>
            <div className='bg-[#0a0a0a] rounded-xl p-4 sm:p-8 border border-[#333]'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                What is MCP?
              </h2>
              <p className='text-gray-300 mb-6'>
                MCP (Model Context Protocol) is Nexlayer's AI-powered deployment
                assistant. Simply describe what you want to build in natural
                language, and MCP will handle the YAML configuration,
                deployment, and setup for you.
              </p>

              <div className='grid md:grid-cols-3 gap-6'>
                <div className='text-center'>
                  <div className='w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-3'>
                    <Sparkles className='h-6 w-6 text-black' />
                  </div>
                  <h3 className='text-white font-medium mb-2'>
                    Natural Language
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    Describe your app in plain English
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-3'>
                    <Bot className='h-6 w-6 text-black' />
                  </div>
                  <h3 className='text-white font-medium mb-2'>AI Assistant</h3>
                  <p className='text-gray-400 text-sm'>
                    AI handles the technical details
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-3'>
                    <Zap className='h-6 w-6 text-black' />
                  </div>
                  <h3 className='text-white font-medium mb-2'>
                    Instant Deploy
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    Your app goes live immediately
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Setup Section */}
          <div className='max-w-4xl mx-auto mb-12'>
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
              Setup with your AI coding assistant
            </h2>

            <div className='bg-[#0a0a0a] rounded-xl p-4 sm:p-8 border border-[#333] mb-8'>
              <h3 className='text-xl font-bold text-white mb-4'>
                Step 1: Install MCP
              </h3>
              <p className='text-gray-300 mb-6'>
                After installing MCP, you can go to Cursor, Claude, or other AI
                coding tools or CLIs that support MCPs.
              </p>

              {/* Tabs Section */}
              <div>
                <div className='grid max-[490px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-2 mb-6'>
                  {techTabs.map((tab, idx) => (
                    <button
                      key={tab.name}
                      className={`bg-[#111] rounded-lg p-4 text-center cursor-pointer 
                        ${selectedTab === idx ? 'bg-[#1c2a2d] text-black border border-[#22B4C8]' : 'bg-[#111] text-white border border-[#333] hover:bg-[#222]'}`}
                      onClick={() => setSelectedTab(idx)}
                      type='button'
                    >
                      <h4 className='text-white font-medium mb-2'>
                        {tab.name}
                      </h4>
                      <p className='text-gray-400 text-sm'>{tab.description}</p>
                    </button>
                  ))}
                </div>

                <div className='bg-[#1a1a1a] rounded-lg p-4 sm:p-6 border border-[#333] mb-6'>
                  <h4 className='text-white font-medium mb-3'>
                    Generate Your Access Token
                  </h4>
                  <p className='text-gray-300 mb-4'>
                    You need to generate a token to use the Nexlayer MCP. Go to{' '}
                    <a
                      href='https://app.nexlayer.io'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[#22B4C8] hover:underline'
                    >
                      app.nexlayer.io
                    </a>{' '}
                    to create your access token.
                  </p>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-[#22B4C8] rounded-full flex-shrink-0'></div>
                    <span className='text-gray-300 text-sm'>
                      Visit app.nexlayer.io
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-[#22B4C8] rounded-full flex-shrink-0'></div>
                    <span className='text-gray-300 text-sm'>
                      Generate your access token
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-[#22B4C8] rounded-full flex-shrink-0'></div>
                    <span className='text-gray-300 text-sm'>
                      Use the token in your MCP configuration
                    </span>
                  </div>
                </div>

                <div className='bg-[#1a1a1a] rounded-lg p-4 sm:p-6 border border-[#333]'>
                  <h4 className='text-white font-medium mb-4'>
                    MCP Configuration
                  </h4>
                  <h5 className='text-[#22B4C8] font-medium mb-2'>
                    {techContent[selectedTab].title}
                  </h5>
                  <p className='text-gray-300 text-sm mb-3'>
                    {techContent[selectedTab].description}
                  </p>
                  {/* Render steps as a numbered list if present */}
                  {techContent[selectedTab].steps ? (
                    <ol className='list-decimal ml-6 text-gray-300 text-sm mb-3'>
                      {techContent[selectedTab].steps.map((step, idx) => (
                        <li key={idx} className='pl-2 py-1'>
                          {typeof step === 'string' ? (
                            <span className='align-top break-words whitespace-pre-line'>{step}</span>
                          ) : step.type === 'code' ? (
                            <div className='bg-[#111] rounded-lg p-4 border border-[#333] mt-2 mb-2'>
                              <pre className='text-[#22B4C8] text-sm overflow-x-auto'>
                                {step.value}
                              </pre>
                            </div>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  ) : null}
                  {/* Render code block if present */}
                  {techContent[selectedTab].code && (
                    <div className='bg-[#111] rounded-lg p-4 border border-[#333] relative group'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='text-gray-400 text-xs'>
                          {techContent[selectedTab].codeText}
                        </span>
                        <button
                          onClick={() =>
                            handleTabCopy(techContent[selectedTab].code)
                          }
                          className='p-1 rounded-md bg-[#222] text-gray-400 hover:text-[#22B4C8] transition-colors'
                          aria-label='Copy configuration'
                        >
                          {copiedTab ? (
                            <Check className='h-3 w-3 text-[#22B4C8]' />
                          ) : (
                            <Copy className='h-3 w-3' />
                          )}
                        </button>
                      </div>
                      <pre className='text-[#22B4C8] text-sm overflow-x-auto'>
                        {techContent[selectedTab].code}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Deployment Command Section */}
            <div className='bg-[#0a0a0a] rounded-xl p-4 sm:p-8 border border-[#333]'>
              <h3 className='text-xl font-bold text-white mb-4'>
                Step 2: Deploy Your Project
              </h3>
              <p className='text-gray-300 mb-6'>
                After installing, you can prompt your AI coding tool with this
                command:
              </p>

              <div className='bg-[#111] rounded-lg p-4 border border-[#333] relative group'>
                <div className='flex items-center justify-between'>
                  <p className='text-[#22B4C8] font-mono text-sm break-all'>
                    {deploymentCommand}
                  </p>
                  <button
                    onClick={() => copyToClipboard(deploymentCommand)}
                    className='ml-4 p-2 rounded-md bg-[#222] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity'
                    aria-label='Copy command'
                  >
                    {copiedCommand === deploymentCommand ? (
                      <Check className='h-4 w-4 text-[#22B4C8]' />
                    ) : (
                      <Copy className='h-4 w-4' />
                    )}
                  </button>
                </div>
              </div>

              <div className='mt-6 p-4 bg-[#1a1a1a] rounded-lg border border-[#333]'>
                <h4 className='text-white font-medium mb-2'>
                  What happens next:
                </h4>
                <ul className='text-gray-300 text-sm space-y-1'>
                  <li>• MCP analyzes your GitHub repository</li>
                  <li>• Automatically generates deployment configuration</li>
                  <li>• Deploys your app to Nexlayer's infrastructure</li>
                  <li>• Returns a live URL for your application</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example Project */}
          <div className='max-w-4xl mx-auto mb-12'>
            <div className='bg-[#0a0a0a] rounded-xl p-4 sm:p-8 border border-[#333]'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Example: AI Code Arena
              </h2>
              <p className='text-gray-300 mb-6'>
                The command above will deploy the{' '}
                <a
                  href='https://github.com/Nexlayer/ai-code-arena'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#22B4C8] hover:underline'
                >
                  AI Code Arena
                </a>{' '}
                project - a cyberpunk-themed browser game where AI coding tools
                battle it out for supremacy.
              </p>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-white font-medium mb-2'>
                    Project Features:
                  </h3>
                  <ul className='text-gray-300 text-sm space-y-1'>
                    <li>• No login required voting system</li>
                    <li>• Real-time vote counting</li>
                    <li>• Cyberpunk design with neon animations</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Local data persistence</li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-white font-medium mb-2'>Tech Stack:</h3>
                  <ul className='text-gray-300 text-sm space-y-1'>
                    <li>• HTML5 & CSS3</li>
                    <li>• JavaScript ES6+</li>
                    <li>• TailwindCSS</li>
                    <li>• localStorage for data</li>
                    <li>• Pure frontend - no build process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='text-center'>
            <div className='bg-[#0a0a0a] rounded-xl p-6 sm:p-10 border border-[#333] max-w-2xl mx-auto'>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Ready to deploy your first app?
              </h3>
              <p className='text-gray-300 mb-8'>
                Try the deployment command above with your own GitHub
                repository.
              </p>
              <div className='flex justify-center'>
                <a
                  href='https://app.nexlayer.io'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-8 py-6 rounded-full text-lg'>
                    Install Nexlayer MCP
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
