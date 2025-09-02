"use client";

import { useState } from "react";
import { ArrowLeft, Copy, Check, Code, Lightbulb, Sparkles, Rocket, Server, Database, Globe, Zap, Wrench, FileText, Settings, Clock, Users, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { YamlCodeBlock } from "@/components/yaml-code-block";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export default function LaunchfilePage() {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});
  const [activeTab, setActiveTab] = useState("simple-website");

  const handleCopy = (text: string, key: string) => {
    copyToClipboard(text);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [key]: false })), 2000);
  };

  const handleTimeCardClick = (tabKey: string) => {
    setActiveTab(tabKey);
    // Scroll to the examples section
    const examplesSection = document.getElementById('examples-section');
    if (examplesSection) {
      examplesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const examples = {
    "simple-website": {
      title: "Simple Website",
      description: "Deploy a static website or simple web app",
      yaml: `application:
  name: my-awesome-website
  url: www.mysite.com # Optional: for permanent deployment
pods:
  - name: web
    image: nginx:latest # Your Docker image
    path: / # Route (homepage)
    servicePorts: [80] # Port your app runs on`
    },
    "fullstack-app": {
      title: "PERN Stack",
      description: "PostgreSQL + Express + React + Node.js working together",
      yaml: `application:
  name: PERN App
  pods:
    - name: postgres
      image: user-name/pern-postgres-todo:latest
      vars:
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: passw0rd
        POSTGRES_DB: todo
        PGDATA: /var/lib/postgresql/data
      servicePorts:
        - 5432
      volumes:
        - name: pg-data-volume
          size: 2Gi
          mountPath: /var/lib/postgresql
    - name: express
      image: user-name/pern-express-todo:latest
      vars:
        POSTGRES_HOST: postgres.pod
        POSTGRES_USERNAME: postgres
        POSTGRES_PASSWORD: passw0rd
        POSTGRES_DB: todo
      servicePorts:
        - 3000
    - name: react
      path: /
      image: user-name/pern-react-todo:latest
      vars:
        EXPRESS_URL: http://express.pod:3000
      servicePorts:
        - 80`
    },
    "api-service": {
      title: "Nextjs FullStack",
      description: "Next.js frontend with PostgreSQL database and Drizzle ORM",
      yaml: `# NexLayer Configuration
# Generated with NexLayer YAML Builder

application:
  name: "nexlayer-app" # Required: Globally unique app name
  pods:
    # 🚀 Frontend built with Next.js (port 80 via nginx) — publicly accessible
    - name: nextjs
      image: "nexlayerplatform/hello-world-nextjs:latest" # Public image — Nexlayer pulls this from Docker Hub
      path: "/" # Root path for public access
      servicePorts:
        - 80 # Main service port

    # 🗄️ Postgres database (port 5432) with 1Gi persistent volume
    - name: postgres
      image: "nexlayerplatform/pern-postgres-todo:v0.01"
      servicePorts:
        - 5432 # Main service port
      vars:
        POSTGRES_USER: "postgres"
        POSTGRES_PASSWORD: "wT8#pL2v!sQ9@dX4"
        POSTGRES_DB: "store"
        PGDATA: "/var/lib/postgresql/data"
      volumes: # Persistent storage for your data
        - name: "postgres-data"
          size: "1Gi" # Storage capacity
          mountPath: "/var/lib/postgresql" # Data persistence path

    # 🔄 Drizzle ORM — lightweight TypeScript ORM
    - name: drizzle
      image: "user-name/drizzle:latest" # Public image — Nexlayer pulls this from Docker Hub
      vars:
        DATABASE_URL: "postgresql://postgres:password@database.pod:5432/mydb" # Service discovery`
    },
    "ai-app": {
      title: "FullStack AI",
      description: "React + Express + MongoDB + Gemini AI working together",
      yaml: `application:
  name: "stellar-ai-chat-mern-template"
  pods:
    # 🔌 Backend API (Node.js + Express)
    - name: express
      image: ghcr.io/stellarstack/stellar-gemini-ai-chatapp-backend:v0.1
      path: /v1
      servicePorts:
        - 3030
      envFile: "./server/.env"
      vars:
        MONGO_URL: "\${MONGO_URL}"
        MONGO_USER: "\${MONGO_USER}"
        MONGO_PASS: "\${MONGO_PASS}"
        GEMINI_API_KEY: "\${GEMINI_API_KEY}"
        CLIENT_API_KEY: "\${CLIENT_API_KEY}"
        GEO_API_KEY: "\${GEO_API_KEY}"
        LOCATION_API_KEY: "\${LOCATION_API_KEY}"
        GOOGLE_CLIENT_ID: "\${GOOGLE_CLIENT_ID}"
        GOOGLE_CLIENT_SECRET: "\${GOOGLE_CLIENT_SECRET}"
        GOOGLE_OAUTH_REDIRECT_URL: "<% URL %>/auth/google/callback"
        CLIENT_REDIRECT_URL: "<% URL %>"
        ACCESS_TOKEN_JWT_SECRET: "\${ACCESS_TOKEN_JWT_SECRET}"
        REFRESH_TOKEN_JWT_SECRET: "\${REFRESH_TOKEN_JWT_SECRET}"
        ACCESS_TOKEN_EXPIRETIME: "\${ACCESS_TOKEN_EXPIRETIME}"
        REFRESH_TOKEN_EXPIRETIME: "\${REFRESH_TOKEN_EXPIRETIME}"
        APPLICATION_TYPE: "\${APPLICATION_TYPE}"
        COOKIE_DOMAIN: "<% URL %>"

    # 🚀 Frontend (React App)
    - name: react
      image: ghcr.io/stellarstack/stellar-gemini-ai-chatapp-frontend:v0.1
      path: /
      servicePorts:
        - 3000
      envFile: "./client-fe/.env"
      vars:
        REACT_APP_GEMINI_KEY: "\${REACT_APP_GEMINI_KEY}"
        REACT_APP_GOOGLE_CLIENT_ID: "\${REACT_APP_GOOGLE_CLIENT_ID}"
        REACT_APP_GOOGLE_CLIENT_SECRET: "\${REACT_APP_GOOGLE_CLIENT_SECRET}"
        REACT_APP_GOOGLE_OAUTH_REDIRECT_URL: "<% URL %>/auth/google/callback"
        REACT_APP_SERVER_ENDPOINT: "<% URL %>/v1"

    # 🗄️ MongoDB (Data Layer)
    - name: mongodb
      image: nexlayerplatform/mongo:latest
      servicePorts:
        - 27017
      envFile: "./server/.env"
      vars:
        MONGO_INITDB_ROOT_USERNAME: "\${MONGO_USER}"
        MONGO_INITDB_ROOT_PASSWORD: "\${MONGO_PASS}"
        MONGO_INITDB_DATABASE: "ChatAI"
      volumes:
        - name: "mongo-data"
          size: "1Gi"
          mountPath: "/data/db"`
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-[#22B4C8] mb-12 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start justify-center mb-6">
              <Rocket className="h-8 w-8 text-[#22B4C8] mr-3 pt-1" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Nexlayer YAML Guide
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy any containerized app to production in <strong>5 minutes or less</strong>. No infrastructure knowledge required - Just describe your app and we handle the rest.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-[#22B4C8] text-[#22B4C8] px-4 py-2">
                <Sparkles className="h-3 w-3 mr-2" />
                MVP to Production
              </Badge>
              <Badge variant="outline" className="border-[#22B4C8] text-[#22B4C8] px-4 py-2">
                <Globe className="h-3 w-3 mr-2" />
                Zero Infrastructure
              </Badge>
              <Badge variant="outline" className="border-[#22B4C8] text-[#22B4C8] px-4 py-2">
                <Zap className="h-3 w-3 mr-2" />
                Auto Scaling
              </Badge>
            </div>
          </motion.div>
        </div>

        {/* What is Nexlayer YAML? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-start gap-3">
              <Code className="h-6 w-6 text-[#22B4C8]" />
              What is Nexlayer YAML?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Think of it like this:</h3>
                <div className="space-y-4">
                  <div className="bg-[#111] rounded-lg p-4 border border-[#333]">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-gray-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-medium mb-1">Traditional way:</p>
                        <p className="text-gray-400 text-sm">Set up servers, configure networking, manage databases, handle scaling...</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#111] rounded-lg p-4 border border-[#22B4C8]/20">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-[#22B4C8] rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-medium mb-1">Nexlayer way:</p>
                        <p className="text-gray-400 text-sm">Just describe your app in a simple YAML file and deploy!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Perfect for:</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-[#111] rounded-lg border border-[#333]">
                    <Globe className="h-5 w-5 text-[#22B4C8]" />
                    <span className="text-gray-300">Web apps (React, Vue, Angular)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#111] rounded-lg border border-[#333]">
                    <Server className="h-5 w-5 text-[#22B4C8]" />
                    <span className="text-gray-300">APIs (Node.js, Python, Go)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#111] rounded-lg border border-[#333]">
                    <Database className="h-5 w-5 text-[#22B4C8]" />
                    <span className="text-gray-300">Full-stack applications</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#111] rounded-lg border border-[#333]">
                    <Sparkles className="h-5 w-5 text-[#22B4C8]" />
                    <span className="text-gray-300">AI/ML services</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#111] rounded-lg border border-[#333]">
                    <Settings className="h-5 w-5 text-[#22B4C8]" />
                    <span className="text-gray-300">Databases & microservices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Time-based Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How much time do you have?</h2>
            <p className="text-gray-300">Choose your deployment path based on your timeline</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              className="bg-[#0a0a0a] border-green-500/30 hover:border-green-500/50 transition-colors cursor-pointer"
              onClick={() => handleTimeCardClick("simple-website")}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">5 min</span>
                </div>
                <CardTitle className="text-white text-lg">I have 5 minutes</CardTitle>
                <CardDescription className="text-gray-400">Deploy a simple website</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-green-500 text-white">Beginner</Badge>
              </CardContent>
            </Card>

            <Card 
              className="bg-[#0a0a0a] border-blue-500/30 hover:border-blue-500/50 transition-colors cursor-pointer"
              onClick={() => handleTimeCardClick("fullstack-app")}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-blue-500 font-medium">10 min</span>
                </div>
                <CardTitle className="text-white text-lg">I need a full-stack app</CardTitle>
                <CardDescription className="text-gray-400">PERN Stack: React + Express + PostgreSQL</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-blue-500 text-white">Intermediate</Badge>
              </CardContent>
            </Card>

            <Card 
              className="bg-[#0a0a0a] border-purple-500/30 hover:border-purple-500/50 transition-colors cursor-pointer"
              onClick={() => handleTimeCardClick("api-service")}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-purple-500 font-medium">15 min</span>
                </div>
                <CardTitle className="text-white text-lg">I'm building for users</CardTitle>
                <CardDescription className="text-gray-400">Next.js FullStack with Drizzle ORM</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-purple-500 text-white">Intermediate</Badge>
              </CardContent>
            </Card>

            <Card 
              className="bg-[#0a0a0a] border-orange-500/30 hover:border-orange-500/50 transition-colors cursor-pointer"
              onClick={() => handleTimeCardClick("ai-app")}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Star className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-orange-500 font-medium">20 min</span>
                </div>
                <CardTitle className="text-white text-lg">I'm building AI apps</CardTitle>
                <CardDescription className="text-gray-400">FullStack AI: React + Express + MongoDB + Gemini</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-orange-500 text-white">Advanced</Badge>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Anatomy of a Nexlayer YAML */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-start justify-center gap-2">
              <FileText className="h-6 w-6 text-[#22B4C8]" />
              Anatomy of a Nexlayer YAML
            </h2>
            <p className="text-gray-300">Every YAML has these main parts (think of them as building blocks)</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-[#0a0a0a] border-[#333] text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <FileText className="h-8 w-8 text-[#22B4C8]" />
                </div>
                <CardTitle className="text-white">Application Name</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Your app's unique identifier</p>
              </CardContent>
            </Card>

            <Card className="bg-[#0a0a0a] border-[#333] text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Server className="h-8 w-8 text-[#22B4C8]" />
                </div>
                <CardTitle className="text-white">Pods (Containers)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Your app's services (frontend, API, database)</p>
              </CardContent>
            </Card>

            <Card className="bg-[#0a0a0a] border-[#333] text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Settings className="h-8 w-8 text-[#22B4C8]" />
                </div>
                <CardTitle className="text-white">Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Ports, environment variables, storage</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Code Examples with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
          id="examples-section"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready-to-Use Examples</h2>
            <p className="text-gray-300">Copy, customize, and deploy these configurations</p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Responsive TabsList: horizontal scroll on small screens, 4-column grid on sm+ */}
            <div className="w-full bg-[#0a0a0a] rounded-md border border-[#333] p-1">
              <TabsList className="hidden sm:grid w-full grid-cols-4 gap-1">
                {Object.entries(examples).map(([key, example]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="text-xs md:text-sm lg:text-base max-md:font-normal data-[state=active]:bg-[#22B4C8] data-[state=active]:text-black rounded-md"
                  >
                    {example.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Small screens: horizontal scroll with snap and no-shrink on triggers */}
              <div className="sm:hidden overflow-x-auto -mx-1 px-o.5 rounded-md">
                <TabsList className="flex w-max gap-2 items-center snap-x snap-mandatory rounded-md">
                  {Object.entries(examples).map(([key, example]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="flex-shrink-0 snap-start text-sm lg:text-base max-md:font-normal data-[state=active]:bg-[#22B4C8] data-[state=active]:text-black rounded-md p-2"
                    >
                      {example.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            {Object.entries(examples).map(([key, example]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <Card className="bg-[#0a0a0a] border-[#333]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-xl">{example.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-base">
                      {example.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <YamlCodeBlock code={example.yaml} showLineNumbers={true} />
                      {/* <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-4 right-4 border-[#333] text-white hover:bg-[#111]"
                        onClick={() => handleCopy(example.yaml, key)}
                      >
                        {copiedStates[key] ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button> */}
                    </div>
                    {key === "simple-website" && (
                      <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <p className="text-blue-300 text-sm">
                          <strong>Explanation:</strong> This deploys a simple website. The 'path: /' means it handles all traffic to your domain.
                        </p>
                      </div>
                    )}
                    {key === "fullstack-app" && (
                      <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <p className="text-blue-300 text-sm">
                          <strong>Explanation:</strong> Complete PERN stack with PostgreSQL database, Express API, and React frontend. All services communicate using internal pod DNS.
                        </p>
                      </div>
                    )}
                    {key === "api-service" && (
                      <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <p className="text-blue-300 text-sm">
                          <strong>Explanation:</strong> Modern Next.js fullstack with PostgreSQL and Drizzle ORM. Includes detailed comments explaining each component and service discovery patterns.
                        </p>
                      </div>
                    )}
                    {key === "ai-app" && (
                      <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <p className="text-blue-300 text-sm">
                          <strong>Explanation:</strong> Classic MERN stack with MongoDB, Express, React, and Node.js. Features comprehensive comments and demonstrates service discovery between frontend, backend, and database.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Deployment Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333]">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <Rocket className="h-6 w-6 text-[#22B4C8]" />
                Deployment Flow (It's This Simple!)
              </h2>
              <p className="text-gray-300">From YAML to production in just 4 steps</p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col max-lg:space-y-6 lg:flex-row max-lg:justify-center items-center space-x-8">
                <div className="max-lg:ml-6 text-center">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="h-6 w-6 text-black" />
                  </div>
                  <p className="text-white font-semibold">Write YAML</p>
                  <p className="text-gray-400 text-sm">Create your nexlayer.yaml file</p>
                </div>
                <div className="text-[#22B4C8] text-2xl max-lg:rotate-90">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-black" />
                  </div>
                  <p className="text-white font-semibold">Build & Push Image</p>
                  <p className="text-gray-400 text-sm">Create dockerfile, build and push image to DockerHub or GitHub registry.</p>
                </div>
                <div className="text-[#22B4C8] text-2xl max-lg:rotate-90">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Rocket className="h-6 w-6 text-black" />
                  </div>
                  <p className="text-white font-semibold">Deploy</p>
                  <p className="text-gray-400 text-sm">Use MCP, API, or your own CI or Github Action Workflow</p>
                </div>
                <div className="text-[#22B4C8] text-2xl max-lg:rotate-90">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Globe className="h-6 w-6 text-black" />
                  </div>
                  <p className="text-white font-semibold">Live!</p>
                  <p className="text-gray-400 text-sm">Your app is running in production</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Concepts and Deployment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Essential Knowledge</h2>
            <p className="text-gray-300">Key concepts and deployment options to get you started</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 xl:gap-8">
            <Card className="bg-[#0a0a0a] border-[#333]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Database className="h-5 w-5 text-[#22B4C8]" />
                  Key Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#22B4C8] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Pods:</strong> Think of pods as individual services (like frontend, API, database). They can talk to each other using podname.pod
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#22B4C8] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Images:</strong> Must be public (Docker Hub) or private (with registryLogin). No local images!
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#22B4C8] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Paths:</strong> URL routes. path: / = homepage, path: /api = API endpoints
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#22B4C8] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Volumes:</strong> Persistent storage that survives restarts. Perfect for databases and file uploads
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a0a0a] border-[#333]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#22B4C8]" />
                  Deployment Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#22B4C8] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">GitHub Actions:</strong> Auto-deploy on every push to main branch
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#22B4C8] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">API/CURL:</strong> Integrate with existing CI/CD pipelines
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#22B4C8] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">AI Assistants:</strong> Use Cursor, Claude, or ChatGPT to generate your YAML
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#22B4C8] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Preview vs Production:</strong> No url = 2-hour preview. With url = permanent deployment
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <Card className="bg-[#0a0a0a] border-[#333]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-[#22B4C8]" />
                Pro Tips for Junior Developers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#22B4C8]" />
                    Start Simple
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Begin with a single pod (just your app)</li>
                    <li>• Add database/services later</li>
                    <li>• Test with preview deployments first</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-[#22B4C8]" />
                    Debugging
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Check your image exists publicly</li>
                    <li>• Verify port numbers match your app</li>
                    <li>• Use environment variables for config</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Settings className="h-4 w-4 text-[#22B4C8]" />
                    Common Patterns
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Frontend: path: /</li>
                    <li>• API: path: /api</li>
                    <li>• Admin: path: /admin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-[#22B4C8]" />
                    Going Live
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Add url field for production</li>
                    <li>• Use secrets for sensitive data</li>
                    <li>• Add volumes for persistent data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-[#0a0a0a] border-[#333] max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-center gap-2">
                <Rocket className="h-6 w-6 text-[#22B4C8]" />
                Ready to Deploy Your First App?
              </CardTitle>
              <CardDescription className="text-gray-400">
                Copy one of the examples above, customize it for your app, and deploy in minutes!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row gap-3 justify-center items-center">
                <Link href="/learn/mcp-quickstart">
                  <Button className="bg-[#22B4C8] hover:bg-[#1DA3B6] text-black px-4 py-3 rounded-full text-sm w-full lg:w-auto">
                    <Rocket className="mr-2 h-4 w-4" />
                    Start Deploying
                  </Button>
                </Link>
                <a
                  href="https://app.nexlayer.io/playground/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-[#22B4C8] text-white hover:bg-[#111] hover:text-[#22B4C8] px-4 py-3 rounded-full text-sm w-full lg:w-auto">
                    <Code className="mr-2 h-4 w-4" />
                    View Full Schema
                  </Button>
                </a>
                <a
                  href="https://github.com/Nexlayer/nexlayer-deployment-yaml/blob/main/advanced.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-[#22B4C8] text-white hover:bg-[#111] hover:text-[#22B4C8] px-4 py-3 rounded-full text-sm w-full lg:w-auto">
                    <Settings className="mr-2 h-4 w-4" />
                    Advanced Configurations
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
