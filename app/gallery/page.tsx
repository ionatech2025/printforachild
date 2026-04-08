import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileDonateCTA } from '@/components/mobile-donate-cta'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { LightboxGallery } from '@/components/lightbox-gallery'
import { galleryImages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'Browse photos of Print for a Child Foundation\'s work across Uganda - see the smiling faces of children receiving educational materials.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Photo Gallery
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Explore moments of joy and transformation as children across Uganda receive the gift of education through books and learning materials.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <LightboxGallery images={galleryImages} columns={3} />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Watch Our Story
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  See the impact of your support through the eyes of the children we serve.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-foreground/5">
                  {/* Placeholder for YouTube/Vimeo embed */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-muted-foreground">
                        Video coming soon
                      </p>
                      <p className="text-sm text-muted-foreground/70 mt-2">
                        {/* Replace with actual YouTube embed: */}
                        {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... /> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Help Create More Smiles
                </h2>
                <p className="text-lg mb-8 text-secondary-foreground/90">
                  Every photo tells a story of hope and opportunity. Help us capture more moments of transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Link href="/donate" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate Today
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                    <Link href="/get-involved" className="flex items-center gap-2">
                      Get Involved
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
      <MobileDonateCTA />
    </>
  )
}
