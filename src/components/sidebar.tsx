import {
  FileCode,
  FileText,
  FileJson,
  FileTerminal,
  Github,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { FaGear, FaUser } from "react-icons/fa6";

export function Sidebar() {
  return (
    <div className="w-80 bg-[#252526] h-screen fixed left-0 top-0  hidden md:block">
      <div className="flex  justify-start">
        <div className="w-16 flex flex-col justify-between bg-black h-screen">
          <div className="flex items-center flex-col mt-9">
            <FileText size={34} className="text-gray-300 m-2" />
            <FileCode size={34} className="text-gray-300 m-4" />
            <Github size={34} className="text-gray-300 m-4" />
            <Mail size={34} className="text-gray-300 m-4" />
            <FileJson size={34} className="text-gray-300 m-4" />
          </div>

          <div className="flex items-center flex-col">
            <FaUser size={34} className="text-gray-300 m-4" />
            <FaGear size={34} className="text-gray-300 m-4" />
          </div>
        </div>

        <div className="space-y-2 px-3 py-4">
          <div className="flex items-center gap-1 text-xs text-gray-400 pl-2">
            <span className="transform rotate-90">▼</span> PORTFOLIO
          </div>
          <div className="space-y-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:bg-[#2d2d2d] px-2 py-1 rounded text-sm"
            >
              <FileCode size={16} className="text-[#519aba]" /> home.jsx
            </Link>
            <Link
              href="/resume"
              className="flex items-center gap-2 text-gray-300 hover:bg-[#2d2d2d] px-2 py-1 rounded text-sm"
            >
              <FileText size={16} className="text-[#e44d26]" /> resume.html
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-gray-300 hover:bg-[#2d2d2d] px-2 py-1 rounded text-sm"
            >
              <Mail size={16} className="text-[#fbc02d]" /> contact.yml
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-gray-300 hover:bg-[#2d2d2d] px-2 py-1 rounded text-sm"
            >
              <FileTerminal size={16} className="text-[#3572A5]" /> projects.py
            </Link>
            <Link
              href="/github"
              className="flex items-center gap-2 text-gray-300 hover:bg-[#2d2d2d] px-2 py-1 rounded text-sm"
            >
              <Github size={16} className="text-gray-300" /> github.md
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}