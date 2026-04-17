import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Printer, Truck, School, BookOpen, CheckCircle, ArrowRight, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileDonateCTA } from '@/components/mobile-donate-cta'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { StatCounter } from '@/components/stat-counter'
import { impactStats, galleryImages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Discover how Print for a Child Foundation prints and distributes educational materials to schools across Uganda, transforming lives through education.',
}

const processSteps = [
  {
    icon: School,
    title: 'School Identification',
    description: 'We partner with schools in underserved communities across Uganda to identify where materials are needed most.',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Alignment',
    description: 'Working with NCDC Uganda, we ensure all materials align with Uganda\'s new competency-based curriculum, focusing on critical thinking, collaboration, and practical application of knowledge.',
  },
  {
    icon: Printer,
    title: 'Quality Printing',
    description: 'We produce high-quality, durable textbooks and learning materials using sustainable printing practices.',
  },
  {
    icon: Truck,
    title: 'Distribution',
    description: 'Our team delivers materials directly to schools, ensuring they reach the children who need them.',
  },
  {
    icon: CheckCircle,
    title: 'Follow-up & Impact',
    description: 'We monitor usage and measure educational outcomes to continuously improve our programs.',
  },
]

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/media/client-april-2026/classroom-portrait.jpg"
              alt="Students reading books during a community event"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/80" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-background">
                  Our Work in Action
                </h1>
                <p className="text-lg text-background/90 leading-relaxed">
                  From printing to distribution, discover how we bring educational materials to children across Uganda and create lasting impact in their lives.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <StatCounter end={impactStats.childrenReached} suffix="+" />
                </div>
                <p className="text-primary-foreground/80 text-sm">Children Reached</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <StatCounter end={impactStats.schoolsSupported} suffix="+" />
                </div>
                <p className="text-primary-foreground/80 text-sm">Schools Supported</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <StatCounter end={impactStats.booksPrinted} suffix="+" />
                </div>
                <p className="text-primary-foreground/80 text-sm">Books Printed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <StatCounter end={12} suffix="" />
                </div>
                <p className="text-primary-foreground/80 text-sm">Districts Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  How We Work
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Our systematic approach ensures that educational materials reach the children who need them most effectively.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <AnimateOnScroll key={step.title} delay={index * 100}>
                      <div className="relative flex gap-6 pb-12 last:pb-0">
                        {/* Icon */}
                        <div className="relative z-10 shrink-0">
                          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                            <Icon className="w-8 h-8 text-secondary-foreground" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="pt-3">
                          <span className="text-sm font-semibold text-secondary">Step {index + 1}</span>
                          <h3 className="font-heading text-xl font-bold mt-1 mb-2 text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Featured Initiative</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
                    Primary English Textbook Project
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In partnership with NCDC Uganda, we launched a comprehensive initiative to provide Primary English textbooks to schools in rural areas. Aligned with Uganda&apos;s new competency-based curriculum, these materials equip students with 21st-century skills and support learner-centered education — transforming the learning experience for students who previously had no access to proper reading materials.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      Over 3,000 textbooks distributed
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      25 primary schools benefited
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      Improved literacy rates by 40%
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      Teacher training sessions included
                    </li>
                  </ul>
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/gallery" className="flex items-center gap-2">
                      View Gallery
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="relative">
                  <Image
                    src="/media/client-april-2026/blue-book-smile.jpg"
                    alt="A student proudly holding a newly received book"
                    width={600}
                    height={450}
                    className="h-auto w-full rounded-2xl shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Schools Map Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Schools We&apos;ve Reached
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Our programs have expanded across multiple districts in Uganda, reaching schools in both urban and rural areas.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <AnimateOnScroll delay={0}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading font-bold text-2xl text-primary mb-2">Mukono District</h3>
                    <p className="text-muted-foreground">15+ schools served</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading font-bold text-2xl text-primary mb-2">Kampala District</h3>
                    <p className="text-muted-foreground">10+ schools served</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading font-bold text-2xl text-primary mb-2">Wakiso District</h3>
                    <p className="text-muted-foreground">12+ schools served</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading font-bold text-2xl text-primary mb-2">Jinja District</h3>
                    <p className="text-muted-foreground">8+ schools served</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={400}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading font-bold text-2xl text-primary mb-2">Mbale District</h3>
                    <p className="text-muted-foreground">6+ schools served</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={500}>
                <Card className="border-0 shadow-lg bg-secondary text-secondary-foreground">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading font-bold text-2xl mb-2">And Growing!</h3>
                    <p className="text-secondary-foreground/80">More districts coming soon</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Photo Highlights */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
                    Moments of Impact
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Capturing the joy of learning across Uganda.
                  </p>
                </div>
                <Button asChild variant="outline">
                  <Link href="/gallery" className="flex items-center gap-2">
                    View Full Gallery
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.slice(0, 8).map((image, index) => (
                <AnimateOnScroll key={index} delay={index * 50}>
                  <div className="relative aspect-square rounded-xl overflow-hidden group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* SDG 4 & Curriculum Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <AnimateOnScroll>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider">SDG 4 Aligned</span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Supporting National &amp; Global Education Goals
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our work directly supports <strong className="text-foreground">UN Sustainable Development Goal 4</strong>: Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We align our materials with Uganda&apos;s new competency-based curriculum, which focuses on equipping students with critical thinking, collaboration, and practical skills — creating self-assured individuals, responsible citizens, and lifelong learners.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-bold text-xl mb-6 text-foreground">Our Target Goals</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Print and distribute <strong className="text-foreground">50,000 sets</strong> of learning materials</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Reach at least <strong className="text-foreground">50 schools</strong> across rural Uganda</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Improve learning outcomes in <strong className="text-foreground">literacy and numeracy</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Increase <strong className="text-foreground">student retention</strong> and reduce dropout rates</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Foster a <strong className="text-foreground">reading culture</strong> in communities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Help Us Reach More Schools
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  With your support, we can expand our programs to reach even more children across Uganda who are waiting for educational materials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Link href="/donate#payment-methods" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate Now
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-blue-600 hover:text-white hover:bg-primary-foreground/10">
                    <Link href="/get-involved">
                      Partner With Us
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
