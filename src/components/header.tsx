import { VSCodeIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[#1e1e1e] border-b border-[#2d2d2d] flex items-center justify-between px-4  z-10">
      <div className="flex justify-start items-center space-x-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <Image src={VSCodeIcon} alt="VSCode" width={24} height={24} />
            </Link>
          </li>

          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="text-gray-300 text-sm">Ashim Rudra Paul - Home.tsx</div>
      </div>

      <div className="flex-1" />
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      </div>
    </div>
  );
}
