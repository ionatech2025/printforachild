import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileDonateCTA } from '@/components/mobile-donate-cta'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { ShareButtons } from '@/components/share-buttons'

export const metadata: Metadata = {
  title: 'New Partnership with NCDC Uganda',
  description: 'We are excited to announce our partnership with the National Curriculum Development Centre to provide curriculum-aligned materials to schools.',
  openGraph: {
    title: 'New Partnership with NCDC Uganda | Print for a Child Foundation',
    description: 'We are excited to announce our partnership with the National Curriculum Development Centre to provide curriculum-aligned materials to schools.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111939-mKtAy9yUAODhVhEGYQniuMM6xOXaZE.jpg'],
  },
}

export default function BlogPostPage() {
  const post = {
    title: 'New Partnership with NCDC Uganda',
    date: '2026-02-28',
    author: 'Print for a Child Team',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111939-mKtAy9yUAODhVhEGYQniuMM6xOXaZE.jpg',
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-8">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto">
                <Button asChild variant="ghost" className="mb-6 -ml-2">
                  <Link href="/blog" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                  </Link>
                </Button>
                
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground text-balance">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
                <p className="lead text-xl text-muted-foreground">
                  We are excited to announce a groundbreaking partnership with the National Curriculum Development Centre (NCDC) Uganda that will significantly enhance the quality and relevance of the educational materials we provide to schools across the country.
                </p>

                <h2>A Strategic Alliance for Education</h2>
                <p>
                  The National Curriculum Development Centre is Uganda&apos;s primary institution responsible for developing the national curriculum and ensuring educational standards across all levels of schooling. This partnership marks a significant milestone in our mission to provide quality educational materials to underprivileged children.
                </p>

                <p>
                  Through this collaboration, we will have direct access to the latest curriculum guidelines and approved educational content, ensuring that every book we print meets national standards and effectively supports classroom learning.
                </p>

                <h2>What This Partnership Means</h2>
                <p>
                  This collaboration brings several key benefits to our programs:
                </p>
                <ul>
                  <li><strong>Curriculum Alignment:</strong> All materials will be perfectly aligned with the Uganda national curriculum</li>
                  <li><strong>Quality Assurance:</strong> NCDC will review and approve our printed materials</li>
                  <li><strong>Updated Content:</strong> Access to the latest educational content and revisions</li>
                  <li><strong>Teacher Support:</strong> Joint teacher training initiatives to maximize material effectiveness</li>
                </ul>

                <h2>The Signing Ceremony</h2>
                <p>
                  The partnership was officially launched during a ceremony at the NCDC headquarters in Kampala, attended by education officials, school administrators, and community leaders. The event was marked by speeches highlighting the importance of accessible educational materials in achieving Uganda&apos;s education goals.
                </p>

                <h2>First Initiative: &ldquo;The Nile English Course&rdquo;</h2>
                <p>
                  As our first joint project, we will be printing and distributing &ldquo;The Nile English Course&rdquo; textbooks to primary schools in rural areas. This NCDC-approved textbook series is designed specifically for the Ugandan context and will help thousands of students improve their English literacy skills.
                </p>

                <h2>Looking Forward</h2>
                <p>
                  This partnership opens new doors for expanding our impact. With NCDC&apos;s support, we are now better equipped than ever to serve schools across Uganda with high-quality, relevant educational materials.
                </p>

                <p>
                  We invite donors and partners to join us in this exciting new chapter. Your support will help us leverage this partnership to reach even more children with the books they need to succeed. <Link href="/donate">Make a donation today</Link> or <Link href="/get-involved">learn how you can get involved</Link>.
                </p>
              </article>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Share Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto">
                <div className="border-t border-b py-6">
                  <ShareButtons title={post.title} />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* More Posts */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
                  Read More Articles
                </h2>
                <Button asChild>
                  <Link href="/blog">View All Posts</Link>
                </Button>
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
