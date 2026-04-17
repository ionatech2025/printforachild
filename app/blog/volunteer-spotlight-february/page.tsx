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
  title: 'Volunteer Spotlight: Making a Difference Together',
  description: 'Meet the dedicated volunteers who make our mission possible. Their commitment to children\'s education in Uganda is truly inspiring.',
  openGraph: {
    title: 'Volunteer Spotlight: Making a Difference Together | Print for a Child Foundation',
    description: 'Meet the dedicated volunteers who make our mission possible. Their commitment to children\'s education in Uganda is truly inspiring.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111931-Bowf1ccD7UPW7uvKsrl77CstMauaHv.jpg'],
  },
}

export default function BlogPostPage() {
  const post = {
    title: 'Volunteer Spotlight: Making a Difference Together',
    date: '2026-02-14',
    author: 'Print for a Child Foundation Team',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111931-Bowf1ccD7UPW7uvKsrl77CstMauaHv.jpg',
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
                  Behind every successful book distribution and every smiling child who receives educational materials, there are dedicated volunteers who make it all possible. Today, we celebrate the incredible individuals who give their time, energy, and hearts to our mission.
                </p>

                <h2>The Heart of Our Mission</h2>
                <p>
                  Volunteers are the backbone of Print for a Child Foundation. From helping with book sorting and packaging to participating in distribution drives and community outreach, our volunteers play a crucial role in every aspect of our work.
                </p>

                <p>
                  This February, we want to shine a spotlight on the amazing people who dedicate their time to ensuring that children across Uganda have access to quality educational materials.
                </p>

                <h2>Meet Some of Our Amazing Volunteers</h2>
                <p>
                  Our volunteer team comes from all walks of life — teachers, students, professionals, retirees, and community members — all united by a common goal: to make education accessible to every child.
                </p>

                <blockquote>
                  &ldquo;Seeing the joy on a child&apos;s face when they receive their first book is something I&apos;ll never forget. It reminds me why I volunteer every weekend.&rdquo;
                </blockquote>

                <p>
                  Whether they&apos;re spending their Saturday mornings packaging books, traveling to rural schools for distributions, or helping with administrative tasks, each volunteer contributes to our collective impact.
                </p>

                <h2>Volunteer Impact in Numbers</h2>
                <p>
                  Our volunteers have accomplished incredible things:
                </p>
                <ul>
                  <li>Over 120 active volunteers in our network</li>
                  <li>More than 2,500 volunteer hours contributed in 2025</li>
                  <li>Participation in 24 distribution events</li>
                  <li>Support for 45+ schools across Uganda</li>
                </ul>

                <h2>Why Volunteer With Us?</h2>
                <p>
                  Volunteering with Print for a Child Foundation offers more than just the satisfaction of helping others. Our volunteers gain:
                </p>
                <ul>
                  <li>Meaningful connections with like-minded individuals</li>
                  <li>Direct impact on children&apos;s education</li>
                  <li>Skills development in community organizing and outreach</li>
                  <li>A sense of purpose and fulfillment</li>
                  <li>Certificates of appreciation and references</li>
                </ul>

                <h2>Join Our Volunteer Family</h2>
                <p>
                  We are always looking for passionate individuals to join our volunteer team. Whether you can give a few hours a month or want to be involved more regularly, there&apos;s a place for you in our mission.
                </p>

                <p>
                  Ready to make a difference? <Link href="/get-involved">Sign up to volunteer</Link> today and become part of a community that&apos;s changing lives through education.
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
