/**
 * BLOG POST TEMPLATE
 * ==================
 * 
 * HOW TO CREATE A NEW BLOG POST:
 * 
 * 1. Copy this entire folder (app/blog/_template-post/) to a new folder
 *    Example: app/blog/my-new-post/
 *    Note: The folder name becomes the URL slug (e.g., /blog/my-new-post)
 * 
 * 2. Rename the folder to your post's URL slug (use lowercase and hyphens)
 *    Good: "march-2026-book-distribution"
 *    Bad: "March 2026 Book Distribution" or "march_2026_book_distribution"
 * 
 * 3. Update the metadata and post object below with your content
 * 
 * 4. Write your article content in the <article> section
 * 
 * 5. Add the post to lib/data.ts in the blogPosts array (add at TOP for newest first)
 * 
 * That's it! Your new post will be live.
 */

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

// ============================================
// STEP 1: UPDATE THIS METADATA
// ============================================
export const metadata: Metadata = {
  title: 'Your Blog Post Title Here',
  description: 'A brief description of your blog post (150-160 characters recommended for SEO).',
  openGraph: {
    title: 'Your Blog Post Title Here | Print for a Child Foundation',
    description: 'A brief description of your blog post.',
    images: ['https://your-image-url-here.jpg'],
  },
}

export default function BlogPostPage() {
  // ============================================
  // STEP 2: UPDATE THIS POST OBJECT
  // ============================================
  const post = {
    title: 'Your Blog Post Title Here',
    date: '2026-04-10', // Format: YYYY-MM-DD
    author: 'Print for a Child Team',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111620-jUmqqfEwZCi0ZuCSVzaLyDn9HNAxoL.jpg',
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - No changes needed */}
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

        {/* Featured Image - No changes needed */}
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

        {/* ============================================
            STEP 3: WRITE YOUR ARTICLE CONTENT BELOW
            ============================================ */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
                {/* Lead paragraph - appears larger */}
                <p className="lead text-xl text-muted-foreground">
                  Your introduction paragraph goes here. This should summarize what the article is about.
                </p>

                {/* Main content - use these HTML tags */}
                <h2>Your First Section Heading</h2>
                <p>
                  Your paragraph text goes here. You can write multiple paragraphs.
                </p>

                <p>
                  Another paragraph. Remember to escape apostrophes with &amp;apos; or use curly braces.
                </p>

                <h2>Another Section</h2>
                <p>
                  More content here.
                </p>

                {/* Lists */}
                <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>

                {/* Blockquotes */}
                <blockquote>
                  &ldquo;A quote from someone goes here.&rdquo;
                </blockquote>

                {/* Links */}
                <p>
                  Check out our <Link href="/donate">donation page</Link> or <Link href="/get-involved">get involved</Link>.
                </p>
              </article>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Share Section - No changes needed */}
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

        {/* More Posts - No changes needed */}
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
