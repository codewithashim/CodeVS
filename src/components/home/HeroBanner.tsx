"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AshimPaul } from '@/assets'

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  const socialLinks = [
    { icon: Globe, href: "https://codewithashim.netlify.app/", label: "Website" },
    { icon: Github, href: "https://github.com/codewithashim", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/codewithashim", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/codewithashim", label: "Twitter" },
  ]

  return (
    <motion.div 
      className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-12 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 transition-opacity duration-300 group-hover:opacity-75" />
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
        animate={{ 
          scale: isHovered ? 1.05 : 1,
          rotate: isHovered ? 5 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <motion.div 
          className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div 
            className="relative w-32 h-32 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={AshimPaul}
              alt="Ashim Rudra Paul"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Ashim Rudra Paul</h1>
            <p className="text-gray-200 text-sm sm:text-base max-w-md">Software Engineer | Full Stack Developer | AI & Cloud Solutions Architect</p>
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
              <TooltipProvider>
                {socialLinks.map((link, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Link href={link.href} target="_blank" passHref>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-white/80 hover:text-white hover:bg-white/10"
                        >
                          <link.icon size={20} />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

