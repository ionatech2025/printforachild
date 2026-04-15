'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function MobileDonateCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true)
      } else if (window.scrollY <= 300) {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (isDismissed || !isVisible) return null

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 right-4 z-50 lg:hidden transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      )}
    >
      <div className="bg-primary rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-3">
        <div className="flex-1">
          <p className="text-primary-foreground font-semibold text-sm">
            Help a child today
          </p>
          <p className="text-primary-foreground/80 text-xs">
            Every donation changes lives
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            <Link href="/donate#payment-methods" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </Button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
            aria-label="Dismiss donation banner"
          >
            <X className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}
