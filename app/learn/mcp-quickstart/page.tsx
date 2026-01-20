'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Bot,
  Sparkles,
  Zap,
  CheckCircle,
  Copy,
  Check,
  ArrowRight,
  RefreshCw,
  UserPlus,
} from 'lucide-react';
import { useState } from 'react';

type ContentItem = {
  title: string;
  description: string;
  codeText?: string;
  code?: string;
  steps?: (string | { type: string; value: string })[];
  postSteps?: string[];
};

const techTabs = [
  { name: 'Cursor', description: 'AI-first code editor' },
  { name: 'Claude Code', description: "Anthropic's AI-powered CLI" },
  { name: 'VS Code', description: 'Using Command Palette' },
  { name: 'Other Tools', description: 'Any MCP-compatible AI IDE or CLI' },
];

// Content for EXISTING users (migration instructions)
const existingUserContent: ContentItem[] = [
  {
    title: 'Cursor - Update Configuration',
    description: 'Update your existing Nexlayer MCP configuration:',
    steps: [
      'Navigate to Cursor Settings -> Tools & MCP',
      'Hover over the installed "nexlayer-mcp" MCP server and select the edit icon',
      'Remove the "headers" object from your configuration so that the new configuration reads:',
      {
        type: 'code',
        value: `{
  "mcpServers": {
    "nexlayer-mcp": {
      "url": "https://mcp.nexlayer.ai/api/mcp"
    }
  }
}`,
      },
      'Save the file and navigate back to the Tools & MCP settings',
      'Click the "Connect" button to authenticate with the Nexlayer MCP server. If the "Connect" button re-appears, select the text "Needs authentication" under the nexlayer-mcp name and select "Open"',
      'Login with one of the SSO providers. You will be redirected back to Cursor',
      'You are now authenticated and ready to use the Nexlayer MCP!',
    ],
  },
  {
    title: 'Claude Code - Update Configuration',
    description: 'Update your existing Nexlayer MCP configuration:',
    steps: [
      'Start a Claude session and prompt Claude with the following: "Remove the authorization header from all nexlayer-mcp MCP server configs in .claude.json file in my home directory"',
      'After completion, close out of your Claude session and start a new one',
      'Enter "/mcp" and select the nexlayer-mcp server',
      'Select "Authenticate" to authenticate with the Nexlayer MCP server. You will be asked to sign in using one of our SSO providers.',
      'After successful authentication you will be asked to return to Claude Code. Please allow 15-20 seconds for Claude to finish authenticating on its end',
      'You are now authenticated and ready to use the Nexlayer MCP!',
    ],
  },
  {
    title: 'VS Code - Update Configuration',
    description: 'Update your existing Nexlayer MCP configuration:',
    steps: [
      'Press Ctrl+Shift+P (or Cmd+Shift+P for Mac) to open the Command Palette',
      'Type "MCP" and then select "MCP: List Servers"',
      'Select the nexlayer-mcp server and then select "Show Configuration"',
      'Remove the headers object from the nexlayer-mcp configuration so that the configuration matches the following:',
      {
        type: 'code',
        value: `"nexlayer-mcp": {
  "url": "https://mcp.nexlayer.ai/api/mcp",
  "type": "http"
}`,
      },
      'Save the file',
      'You should be asked to authenticate with the MCP. If not prompted to do so, click either "Restart" or "Start" above the configuration.',
      'Sign in with any of the SSO providers shown. After successful authentication you will be redirected back to VS Code',
      'You are now authenticated and ready to use the Nexlayer MCP!',
    ],
  },
  {
    title: '',
    description: '',
    steps: [
      'Remove the Authorization header from your nexlayer-mcp configuration and save',
      'Follow the given instructions to sign in to the Nexlayer MCP server',
      'Sign in with one of our SSO providers',
      'You are now authenticated and ready to use the Nexlayer MCP!',
    ],
  },
];

// Content for NEW users
const newUserContent: ContentItem[] = [
  {
    title: 'Cursor Setup',
    description: 'Create or update your .cursor/mcp.json file:',
    codeText: 'Cursor — .cursor/mcp.json',
    code: `{
  "mcpServers": {
    "nexlayer-mcp": {
      "url": "https://mcp.nexlayer.ai/api/mcp"
    }
  }
}`,
    postSteps: [
      'Save the file and navigate to Cursor Settings -> Tools & MCP',
      'Click the "Connect" button to authenticate with the Nexlayer MCP server',
      'Login with one of the SSO providers. You will be redirected back to Cursor',
      'You are now authenticated and ready to use the Nexlayer MCP!',
    ],
  },
  {
    title: 'Claude Code Setup',
    description: 'Use the CLI command to add Nexlayer MCP:',
    codeText: 'CLI command',
    code: `claude mcp add nexlayer-mcp --transport sse https://mcp.nexlayer.ai/api/mcp`,
    postSteps: [
      'Start a new Claude session',
      'Enter "/mcp" and select the nexlayer-mcp server',
      'Select "Authenticate" to authenticate with the Nexlayer MCP server',
      'Sign in with one of our SSO providers',
      'You are now authenticated and ready to use the Nexlayer MCP!',
    ],
  },
  {
    title: 'VS Code Setup',
    description: 'Nexlayer MCP Setup Instructions for VS Code:',
    steps: [
      'Press Ctrl+Shift+P (or Cmd+Shift+P for Mac) to open the Command Palette',
      'Search and select the "MCP: Add Server" command',
      'Select HTTP (HTTP or Server-Sent Events)',
      'Enter https://mcp.nexlayer.ai/api/mcp for the Server URL',
      'Enter nexlayer-mcp for the Server ID',
      'Remove the "headers" object from the nexlayer-mcp configuration so that the configuration matches the following:',
      'You should now be asked to authenticate with the MCP. Select "Allow" then "Open"',
      'Sign in to one of the SSO providers. Once authenticated you will be redirected to VS Code',
      'You are now authenticated and ready to use the Nexlayer MCP!',
    ],
  },
  {
    title: 'Other MCP-Compatible Tools',
    description: 'For other tools, use the MCP server URL:',
    codeText: 'MCP Server URL',
    code: `https://mcp.nexlayer.ai/api/mcp`,
    postSteps: [
      'Configure your MCP client with the URL above (no Authorization header needed)',
      "Follow your tool's instructions to authenticate",
      'Sign in with one of our SSO providers',
      'You are now authenticated and ready to use the Nexlayer MCP!',
    ],
  },
];

export default function MCPQuickStartPage() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [copiedTab, setCopiedTab] = useState(false);
  const [copiedStepCode, setCopiedStepCode] = useState<string | null>(null);
  const [userType, setUserType] = useState<'existing' | 'new' | null>(null);

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

  const handleStepCodeCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStepCode(text);
    setTimeout(() => setCopiedStepCode(null), 2000);
  };

  const deploymentCommand = 'Deploy my project to nexlayer';

  const currentContent =
    userType === 'existing' ? existingUserContent : newUserContent;

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
              Utilizing the Nexlayer MCP
            </h1>
            <p className='text-xl text-gray-300 mb-6'>
              Deploy your first app using your MCP supported AI IDE or CLI.
            </p>

            {/* OAuth/SSO Update Notice */}
            <div className='max-w-2xl mx-auto bg-[#1c2a2d] border border-[#22B4C8] rounded-xl p-6 mb-8'>
              <div className='flex items-center justify-center gap-2 mb-2'>
                <CheckCircle className='h-5 w-5 text-[#22B4C8]' />
                <span className='text-[#22B4C8] font-semibold text-lg'>
                  We have updated our MCP to use OAuth/SSO
                </span>
              </div>
              <p className='text-gray-300 text-sm'>
                Authentication is now simpler and more secure. Choose your path
                below to get started.
              </p>
            </div>
          </div>

          {/* User Type Selection */}
          {!userType && (
            <div className='max-w-4xl mx-auto mb-12'>
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Existing User Path */}
                <button
                  onClick={() => setUserType('existing')}
                  className='bg-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-[#333] hover:border-[#22B4C8] transition-colors text-left group'
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center'>
                      <RefreshCw className='h-6 w-6 text-black' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-white group-hover:text-[#22B4C8] transition-colors'>
                        Existing MCP User
                      </h3>
                      <p className='text-gray-400 text-sm'>
                        Update your configuration
                      </p>
                    </div>
                  </div>
                  <p className='text-gray-300 text-sm mb-4'>
                    If you are currently using the Nexlayer MCP and need to
                    update to the new OAuth/SSO authentication.
                  </p>
                  <div className='flex items-center text-[#22B4C8] font-medium'>
                    Click here to update
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </div>
                </button>

                {/* New User Path */}
                <button
                  onClick={() => setUserType('new')}
                  className='bg-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-[#333] hover:border-[#22B4C8] transition-colors text-left group'
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center'>
                      <UserPlus className='h-6 w-6 text-black' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-white group-hover:text-[#22B4C8] transition-colors'>
                        New User
                      </h3>
                      <p className='text-gray-400 text-sm'>
                        Set up for the first time
                      </p>
                    </div>
                  </div>
                  <p className='text-gray-300 text-sm mb-4'>
                    If you are new to the Nexlayer MCP and want to set it up for
                    the first time.
                  </p>
                  <div className='flex items-center text-[#22B4C8] font-medium'>
                    Click here to get started
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </div>
                </button>
              </div>
            </div>
          )}

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

          {/* Setup Section - Shows after user selects their path */}
          {userType && (
            <>
              {/* Back button */}
              <div className='max-w-4xl mx-auto mb-6'>
                <button
                  onClick={() => {
                    setUserType(null);
                    setSelectedTab(0);
                  }}
                  className='text-gray-400 hover:text-[#22B4C8] transition-colors flex items-center gap-2'
                >
                  <ArrowRight className='h-4 w-4 rotate-180' />
                  Back to selection
                </button>
              </div>

              {/* Setup Section */}
              <div className='max-w-4xl mx-auto mb-12'>
                <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                  {userType === 'existing'
                    ? 'Update Your MCP Configuration'
                    : 'Setup with your AI coding assistant'}
                </h2>

                <div className='bg-[#0a0a0a] rounded-xl p-4 sm:p-8 border border-[#333] mb-8'>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    {userType === 'existing'
                      ? 'Migration Instructions'
                      : 'Step 1: Install MCP'}
                  </h3>
                  <p className='text-gray-300 mb-6'>
                    {userType === 'existing'
                      ? 'Follow the instructions below for your AI coding tool to update to OAuth/SSO authentication.'
                      : 'Choose your AI coding tool below to get started with the Nexlayer MCP.'}
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
                          <p className='text-gray-400 text-sm'>
                            {tab.description}
                          </p>
                        </button>
                      ))}
                    </div>

                    <div className='bg-[#1a1a1a] rounded-lg p-4 sm:p-6 border border-[#333]'>
                      <h4 className='text-white font-medium mb-4'>
                        {userType === 'existing'
                          ? 'Update Instructions'
                          : 'MCP Configuration'}
                      </h4>
                      <h5 className='text-[#22B4C8] font-medium mb-2'>
                        {currentContent[selectedTab].title}
                      </h5>
                      <p className='text-gray-300 text-sm mb-3'>
                        {currentContent[selectedTab].description}
                      </p>
                      {/* Render steps as a numbered list if present */}
                      {currentContent[selectedTab].steps ? (
                        <ol className='list-decimal ml-6 text-gray-300 text-sm mb-3'>
                          {currentContent[selectedTab].steps.map(
                            (step: any, idx: number) => (
                              <li key={idx} className='pl-2 py-1'>
                                {typeof step === 'string' ? (
                                  <span className='align-top break-words whitespace-pre-line'>
                                    {step}
                                  </span>
                                ) : step.type === 'code' ? (
                                  <div className='bg-[#111] rounded-lg p-4 border border-[#333] mt-2 mb-2 relative group'>
                                    <div className='flex items-center justify-end mb-2'>
                                      <button
                                        onClick={() =>
                                          handleStepCodeCopy(step.value)
                                        }
                                        className='p-1 rounded-md bg-[#222] text-gray-400 hover:text-[#22B4C8] transition-colors'
                                        aria-label='Copy code'
                                      >
                                        {copiedStepCode === step.value ? (
                                          <Check className='h-3 w-3 text-[#22B4C8]' />
                                        ) : (
                                          <Copy className='h-3 w-3' />
                                        )}
                                      </button>
                                    </div>
                                    <pre className='text-[#22B4C8] text-sm overflow-x-auto'>
                                      {step.value}
                                    </pre>
                                  </div>
                                ) : null}
                              </li>
                            )
                          )}
                        </ol>
                      ) : null}
                      {/* Render code block if present */}
                      {currentContent[selectedTab].code && (
                        <div className='bg-[#111] rounded-lg p-4 border border-[#333] relative group mb-4'>
                          <div className='flex items-center justify-between mb-2'>
                            <span className='text-gray-400 text-xs'>
                              {currentContent[selectedTab].codeText}
                            </span>
                            <button
                              onClick={() =>
                                handleTabCopy(currentContent[selectedTab].code!)
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
                            {currentContent[selectedTab].code}
                          </pre>
                        </div>
                      )}
                      {/* Render post-steps for new users if present */}
                      {userType === 'new' &&
                        currentContent[selectedTab].postSteps && (
                          <ol
                            className='list-decimal ml-6 text-gray-300 text-sm'
                            start={currentContent[selectedTab].code ? 2 : 1}
                          >
                            {currentContent[selectedTab].postSteps.map(
                              (step: string, idx: number) => (
                                <li key={idx} className='pl-2 py-1'>
                                  <span className='align-top break-words whitespace-pre-line'>
                                    {step}
                                  </span>
                                </li>
                              )
                            )}
                          </ol>
                        )}
                    </div>
                  </div>
                </div>

                {/* Deployment Command Section */}
                <div className='bg-[#0a0a0a] rounded-xl p-4 sm:p-8 border border-[#333]'>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    {userType === 'existing'
                      ? 'Deploy Your Project'
                      : 'Step 2: Deploy Your Project'}
                  </h3>
                  <p className='text-gray-300 mb-6'>
                    After{' '}
                    {userType === 'existing'
                      ? 'updating your configuration'
                      : 'installing'}
                    , you can prompt your AI coding tool with this command:
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
                      <li>
                        • Automatically generates deployment configuration
                      </li>
                      <li>
                        • Deploys your app to Nexlayer&apos;s infrastructure
                      </li>
                      <li>• Returns a live URL for your application</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

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
                    Get Started with Nexlayer MCP
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
