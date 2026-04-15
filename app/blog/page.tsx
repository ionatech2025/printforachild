import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileDonateCTA } from '@/components/mobile-donate-cta'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { blogPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest news, updates, and stories from Print for a Child Foundation\'s work across Uganda.',
}

export default function BlogPage() {
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
                  News & Updates
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stay informed about our latest activities, success stories, and the impact we&apos;re making together in communities across Uganda.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Featured Post */}
            {blogPosts.length > 0 && (
              <AnimateOnScroll>
                <Link href={`/blog/${blogPosts[0].slug}`} className="block group mb-12">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-[16/10] md:aspect-auto">
                        <Image
                          src={blogPosts[0].image}
                          alt={blogPosts[0].title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          priority
                        />
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full w-fit mb-4">
                          Latest Post
                        </span>
                        <time className="text-sm text-muted-foreground">
                          {new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4 text-foreground group-hover:text-primary transition-colors">
                          {blogPosts[0].title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {blogPosts[0].summary}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </AnimateOnScroll>
            )}

            {/* Other Posts */}
            {blogPosts.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <AnimateOnScroll key={post.slug} delay={index * 100}>
                    <Link href={`/blog/${post.slug}`} className="group">
                      <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <time className="text-sm text-muted-foreground">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                          <h3 className="font-heading font-semibold text-xl mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground line-clamp-2 mb-4">
                            {post.summary}
                          </p>
                          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimateOnScroll>
                ))}
              </div>
            )}

            {/* No posts message */}
            {blogPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No blog posts yet. Check back soon for updates!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
                </p>
                {/* Mailchimp Form - Replace with your Mailchimp embed code */}
                <form
                  action="https://printforachild.us1.list-manage.com/subscribe/post"
                  method="POST"
                  target="_blank"
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
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
