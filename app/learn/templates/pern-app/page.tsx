"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, ExternalLink, Play, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { YamlCodeBlock } from "@/components/yaml-code-block";

export default function PERNAppTemplatePage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const yamlConfig = `application:
  name: pern-app
  pods:
    - name: frontend
      path: "/"
      image: "ghcr.io/nexlayer/pern-frontend:latest"
      servicePorts:
        - 3000
      vars:
        REACT_APP_API_URL: "http://backend.pod:5000"
        REACT_APP_DATABASE_URL: "postgresql://user:pass@db.pod:5432/pernapp"
    
    - name: backend
      image: "ghcr.io/nexlayer/pern-backend:latest"
      servicePorts:
        - 5000
      vars:
        DATABASE_URL: "postgresql://user:pass@db.pod:5432/pernapp"
        JWT_SECRET: "your-jwt-secret"
        NODE_ENV: "production"
        PORT: "5000"
    
    - name: db
      image: "postgres:15"
      servicePorts:
        - 5432
      vars:
        POSTGRES_USER: "user"
        POSTGRES_PASSWORD: "pass"
        POSTGRES_DB: "pernapp"
        POSTGRES_INITDB_ARGS: "--encoding=UTF-8 --lc-collate=C --lc-ctype=C"`;

  const githubActionsWorkflow = `name: Build and Deploy PERN App to Nexlayer

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

      - name: Build and push Frontend image
        uses: docker/build-push-action@v5
        with:
          context: ./frontend
          file: ./frontend/Dockerfile
          push: true
          platforms: linux/amd64
          tags: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}/frontend:\${{ env.SHORT_SHA }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Build and push Backend image
        uses: docker/build-push-action@v5
        with:
          context: ./backend
          file: ./backend/Dockerfile
          push: true
          platforms: linux/amd64
          tags: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}/backend:\${{ env.SHORT_SHA }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Update nexlayer.yaml
        run: |
          # Extract the short SHA
          SHORT_SHA=\$(echo \${{ github.sha }} | cut -c1-7)
          
          # Update frontend image in nexlayer.yaml
          sed -i "s|image:.*frontend.*|image: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}/frontend:\$SHORT_SHA|" nexlayer.yaml
          
          # Update backend image in nexlayer.yaml
          sed -i "s|image:.*backend.*|image: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}/backend:\$SHORT_SHA|" nexlayer.yaml
          
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
          
          echo "PERN App deployed to Nexlayer!"
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
              PERN App Template
            </h1>
            <p className="text-xl text-gray-300">
              PostgreSQL, Express, React, and Node.js
            </p>
            <div className="mt-4">
              <span className="bg-pink-500 text-white text-sm px-3 py-1 rounded-full">
                Intermediate Level
              </span>
            </div>
          </div>

          {/* Template Overview */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
              <h2 className="text-2xl font-bold text-white mb-4">Template Overview</h2>
              <p className="text-gray-300 mb-6">
                PERN App is a classic fullstack application template that combines React frontend with Express.js 
                backend, PostgreSQL database, and Node.js runtime. This is the modern evolution of the traditional 
                MERN stack, using PostgreSQL instead of MongoDB for better data consistency and relationships.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#111] rounded-lg p-4 border border-[#333]">
                  <h3 className="text-white font-medium mb-2">Features:</h3>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      React frontend with modern hooks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Express.js REST API
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      PostgreSQL database
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Node.js runtime
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      JWT authentication
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      CRUD operations
                    </li>
                  </ul>
                </div>
                <div className="bg-[#111] rounded-lg p-4 border border-[#333]">
                  <h3 className="text-white font-medium mb-2">Tech Stack:</h3>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• <span className="text-[#22B4C8]">Frontend:</span> React + JavaScript</li>
                    <li>• <span className="text-[#22B4C8]">Backend:</span> Express.js</li>
                    <li>• <span className="text-[#22B4C8]">Database:</span> PostgreSQL</li>
                    <li>• <span className="text-[#22B4C8]">Runtime:</span> Node.js</li>
                    <li>• <span className="text-[#22B4C8]">Auth:</span> JWT</li>
                    <li>• <span className="text-[#22B4C8]">API:</span> REST</li>
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
            
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
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
                <div className="bg-[#111] rounded-lg p-4 border border-[#333]">
                  <code className="text-[#d4d4d4] text-sm break-all">
                    curl -X POST https://app.nexlayer.io/startUserDeployment \<br/>
                    &nbsp;&nbsp;-H "Content-Type: text/x-yaml" \<br/>
                    &nbsp;&nbsp;--data-binary @pern-app.yaml
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
                Get your classic PERN stack application running in minutes with this template.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a 
                  href="https://app.nexlayer.io/playground/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="max-w-[228px] w-full bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-8 py-6 rounded-full text-lg">
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
