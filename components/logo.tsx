import Link from "next/link"
import { Code } from "lucide-react"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Code className="h-6 w-6 text-sky-400" />
      <span className="font-bold text-xl text-gray-200">Tech Hackers</span>
    </Link>
  )
}

