import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SiteLogoProps {
  className?: string
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <div
      className={cn(
        'shrink-0 rounded-full bg-white/95 p-0.5 shadow-sm ring-1 ring-black/10',
        className
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRINT%20FOR%20A%20CHILD-RgkYN0VfsnioTVBuHYMiY9lApppAeI.jpg"
          alt="Print for a Child Foundation Logo"
          fill
          className="rounded-full object-cover object-center"
          sizes="(max-width: 640px) 44px, 60px"
        />
      </div>
    </div>
  )
}
