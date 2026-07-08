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
  title: 'Uplift a Deaf Child Outreach',
  description: 'Print for A Child Foundation Outreach at Sign Message School for the Deaf at Kakiri, Wakiso District.',
  openGraph: {
    title: 'Uplift a Deaf Child Outreach | Print for a Child Foundation',
    description: 'Print for A Child Foundation Outreach at Sign Message School for the Deaf at Kakiri, Wakiso District.',
    images: ['/media/deaf_project/2.jpg'],
  },
}

export default function BlogPostPage() {
  // ============================================
  // STEP 2: UPDATE THIS POST OBJECT
  // ============================================
  const post = {
    title: 'Uplift a Deaf Child Outreach',
    date: '2026-06-12',
    author: 'Print for a Child Foundation Team',
    image: '/media/deaf_project/2.jpg',
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
              <article className="max-w-3xl mx-auto font-sans">
                {/* Lead paragraph - appears larger */}
                <p className="text-xl text-muted-foreground font-medium mb-8 leading-relaxed">
                  At Print for A Child Foundation, we firmly believe that every child deserves access to quality education, learning resources, and opportunities to thrive regardless of their circumstances. It is this belief that continues to drive our mission of reaching underserved and vulnerable learners across Uganda.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  On the 12th June 2026, our team had the privilege of conducting a meaningful outreach program at Sign Message School for the Deaf in Wakiso District tilted ‘Uplift a Deaf Child’ Outreach. The visit was not only an opportunity to provide much-needed educational support but also a chance to connect with an inspiring community of learners whose determination and resilience continue to remind us of the power of education.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold font-heading mt-12 mb-6 text-foreground">Background of Sign Message School for the Deaf</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  Sign Message school for the deaf was established in 2014 by a couple of individuals to take care and educate children with hearing impairment in Uganda, due to limited space they moved the school to the village of Buwanula Luyinja, Kakiri Town Council in Wakiso District. During this time they have educated hundreds of students and currently the school takes care of over 25 deaf children and also has over 9 admisitrators. Among the children includes the orphans, differently abled students among others.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  The biggest challenges facing the school includes lack of food supplies for the students, bedding items since it’s a boarding school, lack of scholastic materials, no classroom structures, lack of clean water and latrines among others.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold font-heading mt-12 mb-6 text-foreground">Delivering Joy and Support</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  The outreach was filled with excitement, joy, and hope as our team delivered a wide range of essential materials and supplies to support the students&apos; learning journey. Among the items donated were scholastic materials, storybooks, revision kits, exercise books, rulers, pens, pencils, sports balls, refreshments, and many other educational resources. These items were carefully selected to enhance both academic learning and extracurricular engagement among the students.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  For many children, access to basic learning materials is often taken for granted. However, for learners in special-needs institutions and underserved communities, these resources can make a significant difference in their educational experience. The donated storybooks will help nurture a culture of reading, creativity, and imagination, while the revision kits and scholastic materials will support classroom learning and academic excellence. The sports balls and recreational materials will encourage physical activity, teamwork, and social interaction, which are equally important aspects of a child&apos;s development.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold font-heading mt-12 mb-6 text-foreground">A Touching Experience</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  One of the most touching moments of the day was witnessing the excitement on the faces of the little ones as they received the donated items. Their smiles, enthusiasm, and expressions of gratitude spoke louder than words. Despite the communication barriers that often exist between the hearing and deaf communities, the language of kindness, compassion, and inclusion was clearly understood by everyone present.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  The outreach also provided an opportunity for our team to interact with the school&apos;s administration, teachers, and support staff. We gained a deeper appreciation of the incredible work they do every day to ensure that children with hearing impairments receive quality education and the support they need to succeed. Their dedication serves as a powerful reminder that inclusive education is essential in building a society where every child has the opportunity to realize their full potential.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  As an organization committed to promoting equitable access to education, Print for A Child Foundation recognizes that many schools serving vulnerable and special-needs learners continue to face challenges related to limited resources and funding. Through initiatives such as this outreach, we aim to bridge some of these gaps and contribute to creating a more supportive learning environment for every child.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold font-heading mt-12 mb-6 text-foreground">Gratitude and Looking Forward</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  We extend our sincere gratitude to all our supporters, partners, volunteers, and well-wishers whose generosity made this outreach possible. Your contributions continue to transform lives and create opportunities for children who need them most. Every donated book, pen, ruler, and learning resource represents more than just a material item—it represents hope, opportunity, and a brighter future.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  As we reflect on this successful outreach, we remain inspired by the courage, determination, and dreams of the students at Sign Message School for the Deaf. Their potential is limitless, and we are honored to play a small role in supporting their educational journey.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  Print for A Child Foundation remains committed to reaching more schools, empowering more learners, and ensuring that no child is left behind. Together, we can continue building a future where every child has access to the tools, resources, and opportunities they need to succeed.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
                  With the help of our volunteers Mr. Ssenabulya Herbert, Ms Elizabeth Nafula and Mr. Paul Bukulu we managed to carryout this activity and they later received Certificates of Appreciation from our Team Leader Mr. Paul Lwanawetaase and our Projects Coordinator Ms Rinah Marion Namwase.
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
