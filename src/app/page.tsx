import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { techStack } from "@/components/tech-stack"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Globe, Twitter } from 'lucide-react'
import HeroSection from "@/components/home/HeroBanner"

const skills = [
  { name: "React Native", color: "border-blue-500/50 text-blue-500" },
  { name: "Fastify", color: "border-green-500/50 text-green-500" },
  { name: "Strapi.io", color: "border-purple-500/50 text-purple-500" },
  { name: "GraphQL", color: "border-pink-500/50 text-pink-500" },
  { name: "TypeScript", color: "border-blue-500/50 text-blue-500" },
  { name: "Prisma", color: "border-teal-500/50 text-teal-500" },
  { name: "PostgreSQL", color: "border-blue-500/50 text-blue-500" },
  { name: "Next.js", color: "border-gray-500/50 text-gray-300" },
  { name: "Laravel", color: "border-red-500/50 text-red-500" },
  { name: "WordPress", color: "border-blue-500/50 text-blue-500" },
  { name: "AWS Cloud", color: "border-orange-500/50 text-orange-500" },
  { name: "Docker", color: "border-blue-500/50 text-blue-500" },
  { name: "Linux", color: "border-yellow-500/50 text-yellow-500" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <Header />
      <Sidebar />
      <main className="pt-24 md:pl-72 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Banner Section */}
        <HeroSection/>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-6 font-mono">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 rounded-full border ${skill.color} text-sm font-medium`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-mono">Tech Stack</h3>
                {techStack.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <h4 className="text-sm text-gray-400">{category.name}</h4>
                    <div className="flex flex-wrap gap-4">
                      {category.tools.map((tool) => (
                        <div key={tool.name} className="flex items-center gap-2">
                          <tool.icon className={`text-2xl ${tool.color}`} />
                          <span className="text-sm text-gray-300">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

             
          </div>
        </div>
      </main>
    </div>
  )
}