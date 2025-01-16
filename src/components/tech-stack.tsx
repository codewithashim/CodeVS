import { 
    SiReact, SiNextdotjs, SiTypescript, SiPrisma, 
    SiPostgresql, SiLaravel, SiWordpress,
    SiDocker, SiLinux, SiPython, SiFirebase, SiMongodb,
    SiExpress, SiGraphql, SiFastify, SiStrapi
  } from 'react-icons/si'
  import { FaAws } from 'react-icons/fa'
  
  export const techStack = [
    {
      name: "Frontend",
      tools: [
        { icon: SiReact, name: "React/React Native", color: "text-[#61DAFB]" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
        { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
      ]
    },
    {
      name: "Backend",
      tools: [
        { icon: SiExpress, name: "Express.js", color: "text-white" },
        { icon: SiFastify, name: "Fastify", color: "text-white" },
        { icon: SiStrapi, name: "Strapi", color: "text-[#8E75FF]" },
        { icon: SiLaravel, name: "Laravel", color: "text-[#FF2D20]" },
      ]
    },
    {
      name: "Database",
      tools: [
        { icon: SiPrisma, name: "Prisma", color: "text-white" },
        { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#336791]" },
        { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
      ]
    },
    {
      name: "CMS & Cloud",
      tools: [
        { icon: SiWordpress, name: "WordPress", color: "text-[#21759B]" },
        { icon: FaAws, name: "AWS", color: "text-[#FF9900]" },
        { icon: SiFirebase, name: "Firebase", color: "text-[#FFCA28]" },
      ]
    },
    {
      name: "DevOps",
      tools: [
        { icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },
        { icon: SiLinux, name: "Linux", color: "text-white" },
      ]
    },
  ]
  
  