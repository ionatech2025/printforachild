import Link from 'next/link'
import Image from 'next/image'
import { Heart, BookOpen, School, Users, GraduationCap, ArrowRight, Quote, TrendingDown, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileDonateCTA } from '@/components/mobile-donate-cta'
import { StatCounter } from '@/components/stat-counter'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { impactStats, programs, testimonials, blogPosts, missionVision } from '@/lib/data'

const programIcons = {
  book: BookOpen,
  school: School,
  users: Users,
  graduation: GraduationCap,
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/media/client-april-2026/classroom-hero.webp"
              alt="Ugandan children reading books together"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <AnimateOnScroll>
                <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
                  Empowering Through Education
                </span>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={100}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
                  Every Child Deserves a Book to Call Their Own
                </h1>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={200}>
                <p className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed">
                  Print for a Child Foundation provides quality printed study materials to less privileged school children across Uganda, transforming lives one book at a time.
                </p>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8">
                    <Link href="/donate#payment-methods" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate Now
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 font-semibold text-lg px-8">
                    <Link href="/get-involved" className="flex items-center gap-2">
                      Get Involved
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-background/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {missionVision.mission}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Education Crisis Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
                  The Challenge
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Why This Matters
                </h2>
                <p className="text-background/80 text-lg max-w-2xl mx-auto">
                  Uganda faces one of Africa&apos;s most severe education crises. Without intervention, millions of children will never complete school.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <AnimateOnScroll delay={0}>
                <div className="text-center p-6">
                  <TrendingDown className="w-10 h-10 text-accent mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    <StatCounter end={43} suffix="%" />
                  </div>
                  <p className="text-background/80 text-sm">
                    of pupils drop out before reaching Primary 7
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="text-center p-6">
                  <TrendingDown className="w-10 h-10 text-accent mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    94.4%
                  </div>
                  <p className="text-background/80 text-sm">
                    dropout rate from Primary 1 to Advanced Level exams
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="text-center p-6">
                  <Globe className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    #1
                  </div>
                  <p className="text-background/80 text-sm">
                    highest school dropout rate in East Africa (UNESCO)
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={300}>
              <div className="text-center mt-10">
                <p className="text-background/70 max-w-2xl mx-auto mb-6">
                  The main driver? Hidden costs like textbooks, exercise books, and pens that families living on less than a dollar a day cannot afford.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More About Our Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Our Impact in Numbers
              </h2>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimateOnScroll delay={0}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    <StatCounter end={impactStats.childrenReached} suffix="+" />
                  </div>
                  <p className="text-primary-foreground/80 font-medium">Children Reached</p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    <StatCounter end={impactStats.schoolsSupported} suffix="+" />
                  </div>
                  <p className="text-primary-foreground/80 font-medium">Schools Supported</p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={200}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    <StatCounter end={impactStats.booksPrinted} suffix="+" />
                  </div>
                  <p className="text-primary-foreground/80 font-medium">Books Printed</p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={300}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    <StatCounter end={impactStats.volunteersJoined} suffix="+" />
                  </div>
                  <p className="text-primary-foreground/80 font-medium">Volunteers Joined</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  What We Do
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Our programs are designed to create lasting impact in the lives of Ugandan children through comprehensive educational support.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => {
                const Icon = programIcons[program.icon as keyof typeof programIcons]
                return (
                  <AnimateOnScroll key={program.title} delay={index * 100}>
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7 text-secondary" />
                        </div>
                        <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                          {program.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {program.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div className="relative">
                  <Image
                    src="/media/client-april-2026/notebook-smiles.jpg"
                    alt="Two students proudly holding their new exercise books"
                    width={600}
                    height={450}
                    className="h-auto w-full rounded-2xl shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={200}>
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    The Joy of Learning
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    When a child holds their own book for the first time, you can see the excitement in their eyes. Our materials are aligned with Uganda&apos;s new competency-based curriculum, equipping students with 21st-century skills like critical thinking and collaboration.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Since 2020, we have been printing and distributing textbooks, revision guides, and learning materials to children across rural Uganda who would otherwise never own a book of their own.
                  </p>
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/our-work" className="flex items-center gap-2">
                      See Our Work
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Stories of Impact
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Hear from the communities we serve and the lives that have been transformed.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-6">
                      <Quote className="w-10 h-10 text-secondary/30 mb-4" />
                      <p className="text-foreground mb-6 leading-relaxed">
                        {`"${testimonial.quote}"`}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
                    Latest Updates
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Stay informed about our recent activities and impact.
                  </p>
                </div>
                <Button asChild variant="outline">
                  <Link href="/blog" className="flex items-center gap-2">
                    View All Posts
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>

            <div className={blogPosts.length === 1 ? "grid max-w-xl mx-auto gap-8" : "grid md:grid-cols-3 gap-8"}>
              {blogPosts.slice(0, 3).map((post, index) => (
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
                        <p className="text-muted-foreground line-clamp-2">
                          {post.summary}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Join Us in Making a Difference
                </h2>
                <p className="text-lg mb-8 text-secondary-foreground/90">
                  Whether you donate, volunteer, or spread the word, every action counts. Together, we can ensure every child in Uganda has access to quality education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Link href="/donate#payment-methods" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate Today
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                    <Link href="/get-involved">
                      Become a Volunteer
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
