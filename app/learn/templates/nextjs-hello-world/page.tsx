"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, ExternalLink, Play, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { YamlCodeBlock } from "@/components/yaml-code-block";

export default function HelloWorldNextJSTemplatePage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const yamlConfig = `application:
  name: "Hello World NextJS App"
  pods:
  - name: nextjs-nginx
    path: /
    image: ghcr.io/nexlayer/hello-world-nextjs:v0.0.1
    servicePorts:
    - 80`;

  const githubActionsWorkflow = `name: Build and Deploy Hello World NextJS to Nexlayer

on:
  push:
    branches:
      - main
  workflow_dispatch:  # Allow manual triggering

env:
  SHORT_SHA: \${{ github.sha }}
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: \${{ env.REGISTRY }}
          username: \${{ github.repository_owner }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: Build and push NextJS image
        uses: docker/build-push-action@v5
        with:
          context: .
          file: ./Dockerfile
          push: true
          platforms: linux/amd64
          tags: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ env.SHORT_SHA }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Update nexlayer.yaml
        run: |
          # Extract the short SHA
          SHORT_SHA=\$(echo \${{ github.sha }} | cut -c1-7)
          
          # Update image in nexlayer.yaml
          sed -i "s|image:.*|image: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\$SHORT_SHA|" nexlayer.yaml
          
          # Display the updated file for verification
          cat nexlayer.yaml

      - name: Deploy to Nexlayer
        env:
          NEXLAYER_API_KEY: \${{ secrets.NEXLAYER_API_KEY }}
        run: |
          # Deploy to Nexlayer using the API
          curl -X POST https://app.nexlayer.io/startUserDeployment \\
            -H "Content-Type: text/x-yaml" \\
            -H "Authorization: Bearer \$NEXLAYER_API_KEY" \\
            --data-binary @nexlayer.yaml
          
          echo "Hello World NextJS application deployed to Nexlayer!"
          echo "Check your deployment status at: https://app.nexlayer.io"`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#22B4C8] rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hello World NextJS Template
            </h1>
            <p className="text-xl text-gray-300">
              Simple NextJS application with Nginx
            </p>
            <div className="mt-4">
              <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                Beginner Level
              </span>
            </div>
          </div>

          {/* Template Overview */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
              <h2 className="text-2xl font-bold text-white mb-4">Template Overview</h2>
              <p className="text-gray-300 mb-6">
                Hello World NextJS is a simple, production-ready NextJS application that demonstrates basic 
                deployment patterns. Perfect for getting started with NextJS applications on Nexlayer.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#111] rounded-lg p-4 border border-[#333]">
                  <h3 className="text-white font-medium mb-2">Features:</h3>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      NextJS application
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Nginx web server
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Docker containerization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Production ready
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Simple deployment
                    </li>
                  </ul>
                </div>
                <div className="bg-[#111] rounded-lg p-4 border border-[#333]">
                  <h3 className="text-white font-medium mb-2">Tech Stack:</h3>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• <span className="text-[#22B4C8]">Framework:</span> NextJS</li>
                    <li>• <span className="text-[#22B4C8]">Language:</span> TypeScript</li>
                    <li>• <span className="text-[#22B4C8]">Web Server:</span> Nginx</li>
                    <li>• <span className="text-[#22B4C8]">Container:</span> Docker</li>
                    <li>• <span className="text-[#22B4C8]">Registry:</span> GitHub Container Registry</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* YAML Configuration */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              YAML Configuration
            </h2>
            
            <div className="bg-[#0a0a0a] rounded-xl p-6 border border-[#333]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium">Complete Configuration</h3>
                <Button
                  onClick={() => copyToClipboard(yamlConfig)}
                  className="bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-4 py-2 rounded-lg text-sm"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Copy YAML"}
                </Button>
              </div>
              
              <YamlCodeBlock code={yamlConfig} showLineNumbers={true} />
            </div>
          </div>

          {/* Deployment Options */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Deploy Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0a0a0a] rounded-xl p-6 border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-4">Via Playground</h3>
                <p className="text-gray-300 mb-4">
                  Use the Nexlayer Playground for a visual deployment experience with AI assistance.
                </p>
                <a 
                  href="https://app.nexlayer.io/playground/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-6 py-3 rounded-lg w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Deploy in Playground
                  </Button>
                </a>
              </div>
              
              <div className="bg-[#0a0a0a] rounded-xl p-6 border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-4">Via Curl</h3>
                <p className="text-gray-300 mb-4">
                  Deploy directly using the command line for automated workflows.
                </p>
                <div className="bg-[#111] rounded-lg p-4 border border-[#333] relative">
                  <Button
                    onClick={() => copyToClipboard('curl -X POST https://app.nexlayer.io/startUserDeployment \\\n  -H "Content-Type: text/x-yaml" \\\n  --data-binary @hello-world-nextjs.yaml')}
                    className="absolute top-2 right-2 bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-3 py-1 rounded text-xs"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                  <code className="text-[#d4d4d4] text-sm">
                    curl -X POST https://app.nexlayer.io/startUserDeployment \<br/>
                    &nbsp;&nbsp;-H "Content-Type: text/x-yaml" \<br/>
                    &nbsp;&nbsp;--data-binary @hello-world-nextjs.yaml
                  </code>
                </div>
              </div>
            </div>

            {/* GitHub Actions Workflow */}
            <div className="bg-[#0a0a0a] rounded-xl p-6 border border-[#333]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">GitHub Actions Workflow</h3>
                <Button
                  onClick={() => copyToClipboard(githubActionsWorkflow)}
                  className="bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-4 py-2 rounded-lg text-sm"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Copy Workflow"}
                </Button>
              </div>
              <p className="text-gray-300 mb-4">
                Add this workflow to your repository at <code className="bg-[#111] px-2 py-1 rounded text-sm">.github/workflows/deploy.yml</code> for automatic deployments on push to main.
              </p>
              <div className="bg-[#111] rounded-lg p-4 border border-[#333] overflow-x-auto">
                <pre className="text-[#d4d4d4] text-sm font-mono whitespace-pre">
                  <code>{githubActionsWorkflow}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-[#0a0a0a] rounded-xl p-10 border border-[#333] max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                Ready to Deploy?
              </h3>
              <p className="text-gray-300 mb-8">
                Get your NextJS application running in minutes with this template.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://app.nexlayer.io/playground/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-8 py-6 rounded-full text-lg">
                    Deploy Now
                  </Button>
                </a>
                <Link href="/learn/templates">
                  <Button
                    variant="outline"
                    className="border-[#22B4C8] text-white hover:bg-[#111] hover:text-[#22B4C8] px-8 py-6 rounded-full text-lg"
                  >
                    View All Templates
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
