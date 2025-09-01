"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Cloud, 
  Zap, 
  Shield, 
  Globe, 
  Code, 
  Database, 
  ArrowRight, 
  CheckCircle,
  Play,
  Rocket,
  Settings
} from "lucide-react";

export default function LearnPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#22B4C8] rounded-full flex items-center justify-center">
                <Cloud className="h-10 w-10 text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Learn Nexlayer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master the Agent-native cloud platform. From quick starts to advanced deployment strategies, 
              everything you need to build and deploy with Nexlayer.
            </p>
          </div>

          {/* What is Nexlayer */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">What is Nexlayer?</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Nexlayer is the first cloud designed for AI agents.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Traditional platforms were built for humans. Nexlayer was built for AI workflows — auto-detecting your stack, generating YAML, and deploying production apps in minutes.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                But it's not a black box: developers still have full control to customize deployments with powerful Launchfile (nexlayer.yaml) configurations and templates.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Lightning Fast</h3>
                  <p className="text-gray-400">
                    Deploy applications in seconds with our optimized container infrastructure.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Enterprise Ready</h3>
                  <p className="text-gray-400">
                    Built-in security, monitoring, and scaling for production workloads
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Regional Coverage</h3>
                  <p className="text-gray-400">
                    Run applications in our US East region data center today. Multi-region and global options are part of our enterprise accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Choose Nexlayer?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Agent-driven Development */}
              <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333] h-[500px] flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Agent-driven Development</h3>
                </div>
                <p className="text-gray-300 mb-6 flex-grow">
                  Built for AI agents and modern workflows. Deploy with natural language using the Nexlayer-MCP.
                </p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Natural language deployment with MCP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>AI-assisted configuration via MCP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Automatic resource injection</span>
                  </li>
                </ul>
              </div>

              {/* Full-Stack Ready */}
              <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333] h-[500px] flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Full-Stack Ready</h3>
                </div>
                <p className="text-gray-300 mb-6 flex-grow">
                  Choose the right path for your data and services. Bring your own database, run Postgres or Redis inside Nexlayer, or deploy tools like cloudbeaver or pgAdmin alongside your app.
                </p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Bring your own database</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Run Postgres or Redis inside Nexlayer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Enterprise managed services available</span>
                  </li>
                </ul>
              </div>

              {/* Zero Configuration */}
              <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333] h-[500px] flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Zero Configuration</h3>
                </div>
                <p className="text-gray-300 mb-6 flex-grow">
                  Deploy any repo without wrestling with setup. Nexlayer automatically injects resources so you can focus on building.
                </p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Automatic scaling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>SSL certificates included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Multiple deployment options</span>
                  </li>
                </ul>
              </div>

              {/* Production-Ready */}
              <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333] h-[500px] flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Production-Ready</h3>
                </div>
                <p className="text-gray-300 mb-6 flex-grow">
                  Scale from prototype to production with containerized deployments. Global multi-region and global failover planned for enterprise accounts.
                </p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Vertical/Horizontal scaling capabilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Enterprise-grade security by default</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22B4C8] flex-shrink-0" />
                    <span>Global multi-region support planned</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8 text-center">
                Choose your path to start building with Nexlayer
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/learn/mcp-quickstart">
                  <div className="bg-[#111] rounded-lg p-6 border border-[#333] hover:border-[#22B4C8] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#22B4C8] rounded-lg flex items-center justify-center">
                        <Play className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">MCP Quickstart</h3>
                        <p className="text-gray-400 text-sm">AI-powered deployment</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      Deploy your first app using natural language with MCP (Model Context Protocol). 
                      Perfect for AI-assisted development workflows.
                    </p>
                    <div className="flex items-center text-[#22B4C8] text-sm font-medium">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>

                <Link href="/launchfile">
                  <div className="bg-[#111] rounded-lg p-6 border border-[#333] hover:border-[#22B4C8] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#22B4C8] rounded-lg flex items-center justify-center">
                        <Code className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">YAML Guide</h3>
                        <p className="text-gray-400 text-sm">Complete YAML reference</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      Complete guide to YAML configuration with examples, best practices, and deployment patterns.
                    </p>
                    <div className="flex items-center text-[#22B4C8] text-sm font-medium">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-[#0a0a0a] rounded-xl p-10 border border-[#333] max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                Start Building Today
              </h3>
              <p className="text-gray-300 mb-8">
                Join thousands of developers who are already building amazing applications on Nexlayer.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://app.nexlayer.io/playground/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-8 py-6 rounded-full text-lg">
                    Try the Playground
                  </Button>
                </Link>
                <Link href="/learn/templates">
                  <Button
                    variant="outline"
                    className="border-[#22B4C8] text-white hover:bg-[#111] hover:text-[#22B4C8] px-8 py-6 rounded-full text-lg"
                  >
                    Browse Templates
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
