import { VSCodeIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[#1e1e1e] border-b border-[#2d2d2d] flex items-center justify-between px-4  z-10">
      <div className="flex justify-start items-center space-x-4">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <Image src={VSCodeIcon} alt="VSCode" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="#">File</Link>
          </li>
          <li>
            <Link href="#">Edit</Link>
          </li>
          <li>
            <Link href="#">View</Link>
          </li>
          <li>
            <Link href="#">Go</Link>
          </li>
          <li>
            <Link href="#">Run</Link>
          </li>
          <li>
            <Link href="#">Terminal</Link>
          </li>
          <li>
            <Link href="#">Help</Link>
          </li>
        </ul>
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
