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
  title: 'March 2026 Book Distribution Drive',
  description: 'We successfully distributed 200 books in the Mukono district, bringing essential educational materials to children who needed them most.',
  openGraph: {
    title: 'March 2026 Book Distribution Drive | Print for a Child Foundation',
    description: 'We successfully distributed 200 books in the Mukono district, bringing essential educational materials to children who needed them most.',
    images: ['/media/client-april-2026/classroom-hero.webp'],
  },
}

export default function BlogPostPage() {
  const post = {
    title: 'March 2026 Book Distribution Drive',
    date: '2026-03-15',
    author: 'Print for a Child Foundation Team',
    image: '/media/client-april-2026/classroom-hero.webp',
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
              <article className="prose prose-lg prose-neutral max-w-3xl mx-auto font-sans prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground prose-p:font-sans prose-p:text-muted-foreground prose-li:font-sans prose-li:text-muted-foreground prose-a:text-primary prose-img:rounded-xl">
                <p className="lead text-xl text-muted-foreground">
                  We are thrilled to share the success of our March 2026 Book Distribution Drive, where we successfully distributed 200 books in the Mukono district, reaching children with educational materials.
                </p>

                <h2>A Day of Joy and Learning</h2>
                <p>
                  On March 15th, 2026, our team embarked on one of our most ambitious distribution drives to date. Starting early in the morning, we visited five primary schools in the Mukono district, bringing with us boxes filled with textbooks, storybooks, and learning materials.
                </p>

                <p>
                  The excitement was palpable as children gathered in their school compounds, eagerly awaiting the arrival of their new books. For many of these students, this would be the first time they would have their own personal textbook to take home and study with.
                </p>

                <h2>The Impact</h2>
                <p>
                  Each child received a set of curriculum-aligned textbooks covering core subjects including English, Mathematics, Science, and Social Studies. Additionally, we distributed storybooks to encourage recreational reading and foster a love for literature.
                </p>

                <p>
                  Teachers at the schools expressed their gratitude, noting how the lack of textbooks had been a significant barrier to effective teaching. &ldquo;Now we can assign homework and independent study. The children can review lessons at home with their families,&rdquo; shared one head teacher.
                </p>

                <h2>Community Support</h2>
                <p>
                  This distribution was made possible through the generous support of our donors and volunteers. We extend our heartfelt thanks to everyone who contributed to making this drive a success.
                </p>

                <h2>Looking Ahead</h2>
                <p>
                  This is just the beginning. We are already planning our next distribution drive and are committed to reaching even more schools and children across Uganda. With your continued support, we can ensure that every child has access to quality educational materials.
                </p>

                <p>
                  If you would like to support our next distribution drive or volunteer with us, please visit our <Link href="/get-involved">Get Involved</Link> page or <Link href="/donate#payment-methods">make a donation</Link> today.
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
