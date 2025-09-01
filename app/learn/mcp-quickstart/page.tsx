"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot, Sparkles, Zap, CheckCircle, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function MCPQuickStartPage() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const deploymentCommand = "Deploy my project to nexlayer @https://github.com/Nexlayer/ai-code-arena";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#22B4C8] rounded-full flex items-center justify-center">
                <Bot className="h-8 w-8 text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Quick Start with MCP
            </h1>
            <p className="text-xl text-gray-300">
              Deploy your first app using your MCP supported AI IDE or CLI.
            </p>
          </div>

          {/* What is MCP */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
              <h2 className="text-2xl font-bold text-white mb-4">What is MCP?</h2>
              <p className="text-gray-300 mb-6">
                MCP (Model Context Protocol) is Nexlayer's AI-powered deployment assistant. 
                Simply describe what you want to build in natural language, and MCP will 
                handle the YAML configuration, deployment, and setup for you.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-white font-medium mb-2">Natural Language</h3>
                  <p className="text-gray-400 text-sm">Describe your app in plain English</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bot className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-white font-medium mb-2">AI Assistant</h3>
                  <p className="text-gray-400 text-sm">AI handles the technical details</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-white font-medium mb-2">Instant Deploy</h3>
                  <p className="text-gray-400 text-sm">Your app goes live immediately</p>
                </div>
              </div>
            </div>
          </div>

          {/* Setup Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Setup with your AI coding assistant
            </h2>
            
                         <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333] mb-8">
               <h3 className="text-xl font-bold text-white mb-4">Step 1: Install MCP</h3>
               <p className="text-gray-300 mb-6">
                 After installing MCP, you can go to Cursor, Claude, or other AI coding tools or CLIs that support MCPs.
               </p>
               
               <div className="grid md:grid-cols-3 gap-4 mb-6">
                 <div className="bg-[#111] rounded-lg p-4 border border-[#333] text-center">
                   <h4 className="text-white font-medium mb-2">Cursor</h4>
                   <p className="text-gray-400 text-sm">AI-first code editor</p>
                 </div>
                 <div className="bg-[#111] rounded-lg p-4 border border-[#333] text-center">
                   <h4 className="text-white font-medium mb-2">Claude Code</h4>
                   <p className="text-gray-400 text-sm">Anthropic's AI-powered CLI</p>
                 </div>
                 <div className="bg-[#111] rounded-lg p-4 border border-[#333] text-center">
                   <h4 className="text-white font-medium mb-2">Other Tools</h4>
                   <p className="text-gray-400 text-sm">Any MCP-compatible AI IDE or CLI</p>
                 </div>
               </div>

               {/* Token Generation */}
               <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#333] mb-6">
                 <h4 className="text-white font-medium mb-3">Generate Your Access Token</h4>
                 <p className="text-gray-300 mb-4">
                   You need to generate a token to use the Nexlayer MCP. Go to <a href="https://app.nexlayer.io" target="_blank" rel="noopener noreferrer" className="text-[#22B4C8] hover:underline">app.nexlayer.io</a> to create your access token.
                 </p>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-[#22B4C8] rounded-full"></div>
                   <span className="text-gray-300 text-sm">Visit app.nexlayer.io</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-[#22B4C8] rounded-full"></div>
                   <span className="text-gray-300 text-sm">Generate your access token</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-[#22B4C8] rounded-full"></div>
                   <span className="text-gray-300 text-sm">Use the token in your MCP configuration</span>
                 </div>
               </div>

               {/* MCP Setup Instructions */}
               <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#333]">
                 <h4 className="text-white font-medium mb-4">MCP Configuration</h4>
                 
                 {/* Cursor Setup */}
                 <div className="mb-6">
                   <h5 className="text-[#22B4C8] font-medium mb-2">Cursor Setup</h5>
                   <p className="text-gray-300 text-sm mb-3">Create or update your <code className="bg-[#111] px-1 rounded">.cursor/mcp.json</code> file:</p>
                   <div className="bg-[#111] rounded-lg p-4 border border-[#333] relative group">
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-gray-400 text-xs">Cursor — .cursor/mcp.json</span>
                       <button
                         onClick={() => copyToClipboard(`{
  "mcpServers": {
    "nexlayer_mcp": {
      "url": "https://mcp.nexlayer.ai/api/mcp",
      "headers": {
        "Authorization": "Bearer <NEXLAYER_MCP_TOKEN>"
      }
    }
  }
}`)}
                         className="p-1 rounded-md bg-[#222] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                         aria-label="Copy configuration"
                       >
                         {copiedCommand === `{
  "mcpServers": {
    "nexlayer_mcp": {
      "url": "https://mcp.nexlayer.ai/api/mcp",
      "headers": {
        "Authorization": "Bearer <NEXLAYER_MCP_TOKEN>"
      }
    }
  }
}` ? (
                           <Check className="h-3 w-3 text-[#22B4C8]" />
                         ) : (
                           <Copy className="h-3 w-3" />
                         )}
                       </button>
                     </div>
                     <pre className="text-[#22B4C8] text-sm overflow-x-auto">
{`{
  "mcpServers": {
    "nexlayer_mcp": {
      "url": "https://mcp.nexlayer.ai/api/mcp",
      "headers": {
        "Authorization": "Bearer <NEXLAYER_MCP_TOKEN>"
      }
    }
  }
}`}
                     </pre>
                   </div>
                 </div>

                 {/* Claude Setup */}
                 <div className="mb-6">
                   <h5 className="text-[#22B4C8] font-medium mb-2">Claude Setup</h5>
                   <p className="text-gray-300 text-sm mb-3">Use the CLI command to add Nexlayer MCP:</p>
                   <div className="bg-[#111] rounded-lg p-4 border border-[#333] relative group">
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-gray-400 text-xs">CLI command</span>
                       <button
                         onClick={() => copyToClipboard(`Claude mcp add nexlayer-mcp
https://mcp.nexlayer.ai/api/mcp -e
BEARER_TOKEN=<YOUR_NEXLAYER_TOKEN>`)}
                         className="p-1 rounded-md bg-[#222] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                         aria-label="Copy command"
                       >
                         {copiedCommand === `Claude mcp add nexlayer-mcp
https://mcp.nexlayer.ai/api/mcp -e
BEARER_TOKEN=<YOUR_NEXLAYER_TOKEN>` ? (
                           <Check className="h-3 w-3 text-[#22B4C8]" />
                         ) : (
                           <Copy className="h-3 w-3" />
                         )}
                       </button>
                     </div>
                     <pre className="text-[#22B4C8] text-sm overflow-x-auto">
{`Claude mcp add nexlayer-mcp
https://mcp.nexlayer.ai/api/mcp -e
BEARER_TOKEN=<YOUR_NEXLAYER_TOKEN>`}
                     </pre>
                   </div>
                 </div>

                 {/* Other Tools */}
                 <div>
                   <h5 className="text-[#22B4C8] font-medium mb-2">Other MCP-Compatible Tools</h5>
                   <p className="text-gray-300 text-sm mb-3">For other tools, use the MCP server URL:</p>
                   <div className="bg-[#111] rounded-lg p-4 border border-[#333] relative group">
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-gray-400 text-xs">MCP Server URL</span>
                       <button
                         onClick={() => copyToClipboard("https://mcp.nexlayer.ai/api/mcp")}
                         className="p-1 rounded-md bg-[#222] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                         aria-label="Copy URL"
                       >
                         {copiedCommand === "https://mcp.nexlayer.ai/api/mcp" ? (
                           <Check className="h-3 w-3 text-[#22B4C8]" />
                         ) : (
                           <Copy className="h-3 w-3" />
                         )}
                       </button>
                     </div>
                     <pre className="text-[#22B4C8] text-sm overflow-x-auto">
https://mcp.nexlayer.ai/api/mcp
                     </pre>
                   </div>
                 </div>
               </div>
             </div>

            {/* Deployment Command Section */}
            <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
              <h3 className="text-xl font-bold text-white mb-4">Step 2: Deploy Your Project</h3>
              <p className="text-gray-300 mb-6">
                After installing, you can prompt your AI coding tool with this command:
              </p>
              
              <div className="bg-[#111] rounded-lg p-4 border border-[#333] relative group">
                <div className="flex items-center justify-between">
                  <p className="text-[#22B4C8] font-mono text-sm break-all">
                    {deploymentCommand}
                  </p>
                  <button
                    onClick={() => copyToClipboard(deploymentCommand)}
                    className="ml-4 p-2 rounded-md bg-[#222] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Copy command"
                  >
                    {copiedCommand === deploymentCommand ? (
                      <Check className="h-4 w-4 text-[#22B4C8]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#1a1a1a] rounded-lg border border-[#333]">
                <h4 className="text-white font-medium mb-2">What happens next:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• MCP analyzes your GitHub repository</li>
                  <li>• Automatically generates deployment configuration</li>
                  <li>• Deploys your app to Nexlayer's infrastructure</li>
                  <li>• Returns a live URL for your application</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example Project */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
              <h2 className="text-2xl font-bold text-white mb-4">Example: AI Code Arena</h2>
              <p className="text-gray-300 mb-6">
                The command above will deploy the <a href="https://github.com/Nexlayer/ai-code-arena" target="_blank" rel="noopener noreferrer" className="text-[#22B4C8] hover:underline">AI Code Arena</a> project - a cyberpunk-themed browser game where AI coding tools battle it out for supremacy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-medium mb-2">Project Features:</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• No login required voting system</li>
                    <li>• Real-time vote counting</li>
                    <li>• Cyberpunk design with neon animations</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Local data persistence</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Tech Stack:</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
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
          <div className="text-center">
            <div className="bg-[#0a0a0a] rounded-xl p-10 border border-[#333] max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                Ready to deploy your first app?
              </h3>
              <p className="text-gray-300 mb-8">
                Try the deployment command above with your own GitHub repository.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://app.nexlayer.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-8 py-6 rounded-full text-lg">
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
