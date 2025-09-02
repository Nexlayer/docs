"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Rocket, DollarSign, Settings, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: FAQItem[]
}

const faqData: FAQSection[] = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      {
        question: "What is Nexlayer?",
        answer: "Nexlayer is an Agent-native cloud platform that simplifies deploying and scaling applications. With Nexlayer, you define your application structure in a simple YAML file, and our platform handles all the complex infrastructure details automatically."
      },
      {
        question: "How do I get started with Nexlayer?",
        answer: "Getting started is easy! Simply create a nexlayer.yaml file describing your application, and use our MCP (Model Context Protocol) integration to deploy. No complex setup or configuration required."
      },
      {
        question: "What types of applications can I deploy?",
        answer: "Nexlayer supports a wide range of applications including web apps, APIs, microservices, AI/ML workloads, and full-stack applications. Any containerized application can be deployed on our platform."
      }
    ]
  },
  {
    title: "Pricing & Value",
    icon: DollarSign,
    items: [
      {
        question: "Why $49/mo — isn't that cheap for a production cloud?",
        answer: "Yes — because Nexlayer is optimized for AI-driven software development. It's built on the same powerful, secure, and scalable orchestration technology trusted by Google, Apple, Spotify, Unity, and Cursor — but delivered without the infra complexity of AWS, GCP, or Azure, and without the cost of hiring a team of DevOps engineers or Kubernetes experts. Nexlayer gives that same big-tech execution power to AI builders and startup founders everywhere, regardless of geography."
      },
      {
        question: "What does 'beta' mean for me as a user?",
        answer: "During beta, you get generous execution limits and direct support as we refine Nexlayer with developer feedback. Pricing and features will only get stronger after launch — so early adopters lock in the best value."
      }
    ]
  },
  {
    title: "Tech & Features",
    icon: Settings,
    items: [
      {
        question: "What is a launchfile (nexlayer.yaml)?",
        answer: "A launchfile is a YAML configuration file that describes your application's structure, including containers, services, volumes, and networking. It's the single source of truth for your deployment."
      },
      {
        question: "How does MCP integration work?",
        answer: "MCP (Model Context Protocol) allows AI agents to interact with Nexlayer directly. You can deploy applications using natural language commands, making deployment as simple as describing what you want."
      },
      {
        question: "Can I use my own container images?",
        answer: "Absolutely! Nexlayer works with any container registry. You can use public images from Docker Hub, private images from your own registry, or build images directly from your code."
      }
    ]
  },
  {
    title: "Security & Scale",
    icon: Shield,
    items: [
      {
        question: "Where do my apps run?",
        answer: "By default, your applications run on Nexlayer's Agent-native Cloud Platform in the US East region. With Nexlayer's native DNS and edge routing, your apps are globally accessible with low-latency DNS resolution. Multi-region deployments and regional selection are available for customers on the Conquer (Enterprise) plan."
      },
      {
        question: "How secure is my data?",
        answer: "Security is built into every layer of our platform. We provide enterprise-grade security features including encrypted data transmission, secure container isolation, and compliance with industry standards."
      },
      {
        question: "How does auto-scaling work?",
        answer: "Nexlayer automatically scales your applications based on demand. Our intelligent scaling algorithms monitor traffic patterns and resource usage to ensure optimal performance while minimizing costs."
      }
    ]
  }
]

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="min-h-screen grid-background text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Questions? We got answers. Don't see your answer?{" "}
            <a 
              href="https://discord.gg/EBW93bQZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#22B4C8] hover:underline"
            >
              Talk to Nexlayer Engineer
            </a>
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((section, sectionIndex) => (
            <Card key={section.title} className="bg-[#0a0a0a] border-[#333]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <section.icon className="h-6 w-6 text-[#22B4C8]" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`
                  const isExpanded = expandedItems[key]

                  return (
                    <div key={itemIndex} className="border border-[#333] rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(sectionIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#111] transition-colors"
                      >
                        <span className="font-semibold text-white">
                          Q: {item.question}
                        </span>
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 text-[#22B4C8]" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-[#22B4C8]" />
                        )}
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-300">
                              <span className="font-semibold text-[#22B4C8]">A: </span>
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-[#0a0a0a] border-[#333] text-center">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Our team is here to help you get the most out of Nexlayer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/EBW93bQZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#22B4C8] text-black font-semibold rounded-lg hover:bg-[#1a9ba8] transition-colors"
                >
                  Join our Discord
                </a>
                <a
                  href="https://github.com/Nexlayer/docs/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#22B4C8] text-[#22B4C8] font-semibold rounded-lg hover:bg-[#22B4C8] hover:text-black transition-colors"
                >
                  Report an Issue
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
