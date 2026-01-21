"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Terminal,
  Code,
  Zap,
  Settings,
  FileText,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section>
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 pt-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="sm:pt-12 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Welcome to Nexlayer!
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              In a few minutes, you&apos;ll be set up to deploy production-grade apps from your AI code editor or CLI straight to Nexlayer AI-native Cloud Platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OAuth/SSO Update Notice */}
      <section className="pb-8">
        <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1c2a2d] border border-[#22B4C8] rounded-xl p-6"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-[#22B4C8]" />
              <span className="text-[#22B4C8] font-semibold text-lg">We have updated our MCP to use OAuth/SSO</span>
            </div>
            <p className="text-gray-300 text-center text-sm">
              Authentication is now simpler and more secure. Choose your path below to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-300">
              Two ways to deploy your applications on Nexlayer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* MCP Path */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0a0a0a] rounded-xl p-4 sm:p-8 border-2 border-[#22B4C8] hover:border-[#1DA3B6] transition-colors group cursor-pointer relative"
            >
              <div className="absolute -top-3 -right-3 bg-[#22B4C8] text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                Recommended
              </div>
              <Link href="/learn/mcp-quickstart" className="block">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#22B4C8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#22B4C8] transition-colors">
                    🚀 AI Agent Path
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    "Deploy my app to Nexlayer"
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[#22B4C8]" />
                    <span className="text-white">Natural language prompts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bot className="h-5 w-5 text-[#22B4C8]" />
                    <span className="text-white">AI generates YAML for you</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-[#22B4C8]" />
                    <span className="text-white">5 minutes to deploy</span>
                  </div>
                </div>

                <div className="bg-[#111] rounded-lg p-4 border border-[#333] mb-6">
                  <p className="text-gray-300 text-sm italic">
                    "Deploy my app to nexlayer. @https://github.com/Nexlayer/ai-code-arena"
                  </p>
                </div>

                <Button className="w-full bg-[#22B4C8] hover:bg-[#1DA3B6] text-black">
                  Start with MCP
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Manual Path */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0a0a0a] rounded-xl p-8 border border-[#333] hover:border-[#22B4C8] transition-colors group cursor-pointer"
            >
              <Link href="/launchfile" className="block">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Terminal className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#22B4C8] transition-colors">
                    ⚙️ Manual Path
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    "I know what I'm doing"
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-gray-400" />
                    <span className="text-white">YAML configuration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-gray-400" />
                    <span className="text-white">Full control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <span className="text-white">Ready-to-use templates</span>
                  </div>
                </div>

                <div className="bg-[#111] rounded-lg p-4 border border-[#333] mb-6">
                  <p className="text-gray-300 text-sm italic">
                    application:<br/>
                    &nbsp;&nbsp;name: my-app<br/>
                    &nbsp;&nbsp;pods:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;- name: web
                  </p>
                </div>

                <Button variant="outline" className="w-full border-[#333] text-white hover:bg-[#111] hover:text-[#22B4C8]">
                  Start with YAML
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
