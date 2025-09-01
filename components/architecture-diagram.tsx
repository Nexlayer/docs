"use client";

import { ArrowRight, Zap, Wrench, Cloud, Link, TrendingUp, Shield, Database, BarChart3, Lock, Bot, Code, Settings, Network, Activity, ArrowDown, ArrowUpRight } from "lucide-react";

export function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Main Architecture Grid - 3 Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left: Deploy */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-400" />
            <span className="text-white font-semibold text-lg">Deploy</span>
          </div>
          
          <div className="text-sm text-gray-400 mb-4 text-center">
            Agents or devs send intent (via MCP or LaunchFile).
          </div>
          
          <div className="space-y-4">
            {/* Agent Deploy */}
            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-3">
                <Bot className="h-5 w-5 text-blue-400" />
                <span className="font-semibold text-white">Agent Deploy (MCP)</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Cursor</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">MCP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Claude Code</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">MCP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">etc.</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">MCP</span>
                </div>
              </div>
            </div>
            
            {/* Manual Deploy */}
            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="h-5 w-5 text-blue-400" />
                <span className="font-semibold text-white">Manual Deploy (LaunchFile)</span>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">LaunchFile (nexlayer.yaml)</div>
                <div className="text-sm text-gray-300">cURL API</div>
                <div className="text-sm text-gray-300">GitHub Actions</div>
                <div className="text-sm text-gray-300">Custom CI/CD</div>
                <div className="text-xs text-gray-400 mt-2 italic">
                  Note: If it can POST HTTP, it can deploy to Nexlayer. POST nexlayer.yaml to → /startUserDeployment endpoint.
                </div>
              </div>
            </div>
          </div>

          {/* Flow Arrow to Center */}
          <div className="flex justify-center">
            <div className="bg-[#333] rounded-lg p-2">
              <ArrowRight className="h-5 w-5 text-blue-400" />
            </div>
          </div>
        </div>
        
        {/* Center: Nexlayer Agent-native Cloud */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-green-400" />
            <span className="text-white font-semibold text-lg">Nexlayer Agent-native Cloud</span>
          </div>
          
          <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="h-6 w-6 text-green-400" />
              <span className="font-bold text-white text-xl">Orchestrator Supervisor</span>
            </div>
            
                         <div className="space-y-3">
               <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                 <div className="flex items-center gap-2">
                   <Zap className="h-4 w-4 text-purple-400" />
                   <span className="text-sm font-medium text-white">App Runtime</span>
                 </div>
                 <p className="text-xs text-gray-400 mt-1">pulls code, spins services</p>
               </div>
               
               <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                 <div className="flex items-center gap-2">
                   <Network className="h-4 w-4 text-purple-400" />
                   <span className="text-sm font-medium text-white">Connectivity</span>
                 </div>
                 <p className="text-xs text-gray-400 mt-1">routes traffic, domains, HTTPS</p>
               </div>
               
               <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                 <div className="flex items-center gap-2">
                   <Shield className="h-4 w-4 text-purple-400" />
                   <span className="text-sm font-medium text-white">Protection</span>
                 </div>
                 <p className="text-xs text-gray-400 mt-1">handles auth, secrets, isolation</p>
               </div>
               
               <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                 <div className="flex items-center gap-2">
                   <TrendingUp className="h-4 w-4 text-purple-400" />
                   <span className="text-sm font-medium text-white">Auto-scaling</span>
                 </div>
                 <p className="text-xs text-gray-400 mt-1">adjusts capacity automatically</p>
               </div>
               
               <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                 <div className="flex items-center gap-2">
                   <Database className="h-4 w-4 text-purple-400" />
                   <span className="text-sm font-medium text-white">Storage</span>
                 </div>
                 <p className="text-xs text-gray-400 mt-1">temporary by default, upgrade to keep it</p>
               </div>
               
               <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                 <div className="flex items-center gap-2">
                   <BarChart3 className="h-4 w-4 text-purple-400" />
                   <span className="text-sm font-medium text-white">Telemetry</span>
                 </div>
                 <p className="text-xs text-gray-400 mt-1">logs and data</p>
               </div>
             </div>
          </div>

          {/* Flow Arrow to Right */}
          <div className="flex justify-center">
            <div className="bg-[#333] rounded-lg p-2">
              <ArrowRight className="h-5 w-5 text-green-400" />
            </div>
          </div>
        </div>
        
        {/* Right: Deliver */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Link className="h-5 w-5 text-cyan-400" />
            <span className="text-white font-semibold text-lg">Deliver</span>
          </div>
          
          <div className="space-y-4">
                         <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
               <div className="flex items-center gap-2 mb-2">
                 <Link className="h-4 w-4 text-cyan-400" />
                 <span className="text-sm font-medium text-white">Live App URL</span>
               </div>
               <p className="text-xs text-gray-400">Temporary URL or Custom Domains</p>
             </div>
            
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">Auto-scale built-in</span>
              </div>
              <p className="text-xs text-gray-400">scales with demand</p>
            </div>
            
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">TLS + Zero Trust</span>
              </div>
              <p className="text-xs text-gray-400">secure by default</p>
            </div>
            
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">Storage</span>
              </div>
              <p className="text-xs text-gray-400">ephemeral free, persistent upgrade</p>
            </div>
            
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">Logs + metrics</span>
              </div>
              <p className="text-xs text-gray-400">included</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Title */}
      <div className="text-center mt-12">
        <div className="bg-[#0a0a0a] rounded-lg p-4 border border-[#333] inline-block">
          <h3 className="text-lg font-bold text-white">Nexlayer Agent-Native Cloud (System View)</h3>
        </div>
      </div>
    </div>
  );
}
