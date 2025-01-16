import { 
  SiReact, SiNextdotjs, SiTypescript, SiPrisma, 
  SiPostgresql, SiLaravel, SiWordpress, SiDocker, 
  SiLinux, SiPython, SiFirebase, SiMongodb, SiExpress, 
  SiGraphql, SiFastify, SiStrapi, SiC, SiSharp, SiPuppet, 
  SiKubernetes, SiJenkins, SiTerraform, SiAnsible, 
  SiGitlab, SiGithub, SiNginx 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const techStack = [
  {
    name: "Frontend",
    tools: [
      { icon: SiReact, name: "React/React Native", color: "text-[#61DAFB]" },
      { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
      { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
    ],
  },
  {
    name: "Backend",
    tools: [
      { icon: SiExpress, name: "Express.js", color: "text-white" },
      { icon: SiFastify, name: "Fastify", color: "text-white" },
      { icon: SiStrapi, name: "Strapi", color: "text-[#8E75FF]" },
      { icon: SiLaravel, name: "Laravel", color: "text-[#FF2D20]" },
      { icon: SiGraphql, name: "GraphQL", color: "text-[#E535AB]" },
    ],
  },
  {
    name: "Database",
    tools: [
      { icon: SiPrisma, name: "Prisma", color: "text-white" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#336791]" },
      { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
    ],
  },
  {
    name: "CMS & Cloud",
    tools: [
      { icon: SiWordpress, name: "WordPress", color: "text-[#21759B]" },
      { icon: FaAws, name: "AWS", color: "text-[#FF9900]" },
      { icon: SiFirebase, name: "Firebase", color: "text-[#FFCA28]" },
    ],
  },
  {
    name: "DevOps",
    tools: [
      { icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },
      { icon: SiLinux, name: "Linux", color: "text-white" },
      { icon: SiPuppet, name: "Puppet", color: "text-[#FFAE1A]" }, // Represents Pzl
      { icon: SiKubernetes, name: "Kubernetes", color: "text-[#326CE5]" },
      { icon: SiJenkins, name: "Jenkins", color: "text-[#D24939]" },
      { icon: SiTerraform, name: "Terraform", color: "text-[#623CE4]" },
      { icon: SiAnsible, name: "Ansible", color: "text-[#EE0000]" },
      { icon: SiGitlab, name: "GitLab CI/CD", color: "text-[#FCA121]" },
      { icon: SiGithub, name: "GitHub Actions", color: "text-[#181717]" },
      { icon: SiNginx, name: "Nginx", color: "text-[#009639]" },
      { 
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-6 h-6"
            fill="currentColor"
          >
            <circle cx="24" cy="24" r="20" fill="#4CAF50" />
            <text
              x="24"
              y="28"
              fill="white"
              fontSize="14"
              fontWeight="bold"
              textAnchor="middle"
            >
              Pzl
            </text>
          </svg>
        ),
        name: "Custom Pzl",
        color: "text-[#4CAF50]"
      }, // Fallback custom SVG
    ],
  },
  {
    name: "Programming Languages",
    tools: [
      { icon: SiC, name: "C", color: "text-[#A8B9CC]" },
      { icon: SiSharp, name: "C#", color: "text-[#239120]" },
      { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
    ],
  },
];
