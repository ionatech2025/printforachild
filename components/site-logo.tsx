import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SiteLogoProps {
  className?: string
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <div
      className={cn(
        'shrink-0 rounded-2xl bg-white/95 p-1 shadow-sm ring-1 ring-black/10',
        className
      )}
    >
      <Image
        src="/brand/logo-foundation.svg"
        alt="Print for a Child Foundation logo"
        width={128}
        height={128}
        className="h-full w-full object-contain"
        sizes="(max-width: 640px) 52px, 72px"
      />
    </div>
  )
}
