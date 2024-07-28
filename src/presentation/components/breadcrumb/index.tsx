import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function Breadcrumb({
  paths,
}: {
  paths: { href: string; label: string }[]
}) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap gap-2">
        {paths.map((path, index) => (
          <li
            key={path.href}
            className="mt-2 flex translate-y-1 gap-1 hover:underline"
          >
            <Link href={path.href}>{path.label}</Link>
            {index < paths.length - 1 && <ChevronRight />}
          </li>
        ))}
      </ol>
    </nav>
  )
}
