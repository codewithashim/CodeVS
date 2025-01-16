import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { techStack } from "@/components/tech-stack"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Globe, Twitter } from 'lucide-react'

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
          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
              <div className="absolute inset-0" style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              }} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src={"/placeholder.svg?height=96&width=96"}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Ashim Rudra Paul</h1>
                <p className="text-gray-300">Software Engineer | Full Stack Developer | AI & Cloud Solutions Architect</p>
                <div className="flex gap-2 mt-2">
                  <Link href="https://codewithashim.netlify.app/" target="_blank" className="text-gray-400 hover:text-white">
                    <Globe size={20} />
                  </Link>
                  <Link href="https://github.com/codewithashim" target="_blank" className="text-gray-400 hover:text-white">
                    <Github size={20} />
                  </Link>
                  <Link href="https://linkedin.com/in/codewithashim" target="_blank" className="text-gray-400 hover:text-white">
                    <Linkedin size={20} />
                  </Link>
                  <Link href="https://twitter.com/codewithashim" target="_blank" className="text-gray-400 hover:text-white">
                    <Twitter size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

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

            {/* Location & Contact */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-4 font-mono">Location</h3>
                <p className="text-gray-300">Sylhet, Bangladesh</p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-[#b180d7] hover:bg-[#9d66c9] text-white border-none rounded-md px-6">
                  Resume
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 rounded-md px-6">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}