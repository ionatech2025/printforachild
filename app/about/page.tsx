import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Target, Eye, Users, ArrowRight, Quote, Globe, TrendingDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileDonateCTA } from '@/components/mobile-donate-cta'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { StatCounter } from '@/components/stat-counter'
import { teamMembers, testimonials, founderProfile, missionVision } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Print for a Child Foundation, our mission to provide educational materials to underprivileged children in Uganda, and meet our dedicated team.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  About Print for a Child Foundation
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2020 and officially registered in 2026, Print for a Child Foundation is a Ugandan non-profit dedicated to transforming lives through the power of education. We have impacted the lives of over 560 children across the country and continue to grow our reach every day.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div className="relative">
                  <Image
                    src={founderProfile.image}
                    alt={`${founderProfile.name}, Co-Founder of Print for a Child Foundation`}
                    width={600}
                    height={450}
                    className="h-auto w-full rounded-2xl shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div>
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Founder&apos;s Story</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
                    From Personal Experience to a Mission
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Born and raised in Uganda, <strong className="text-foreground">{founderProfile.name}</strong> witnessed firsthand the severe lack of educational resources in rural schools — having personally been a victim of the same challenges during his early years in school. Many students shared a single textbook among five or more classmates, severely limiting their ability to learn.
                    </p>
                    <p>
                      This experience fueled his commitment to change the narrative. In 2020, Paul started Print for a Child Foundation with the mission of bridging the educational gap through the provision of textbooks, storybooks, writing materials, and printed educational content to underserved areas.
                    </p>
                    <p>
                      Today, the foundation has impacted the lives of over 560 children across the country, working hand-in-hand with schools, communities, and partners to create lasting educational impact across Uganda. The team of vibrant and energetic people continues to grow, driven by the belief that every child deserves a decent future through education.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Why We Exist - Education Crisis */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why We Exist</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
                  Uganda&apos;s Education Crisis
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Uganda has the highest school dropout rate in East Africa. The statistics paint a grim picture that drives our urgency to act.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimateOnScroll delay={0}>
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <TrendingDown className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      <StatCounter end={43} suffix="%" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Drop Out Before P7</h3>
                    <p className="text-muted-foreground text-sm">
                      43% of pupils who enroll in Primary 1 drop out of school before reaching Primary 7, according to UNEB data.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <TrendingDown className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      94.4%
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Never Reach UACE</h3>
                    <p className="text-muted-foreground text-sm">
                      Of 1,837,227 pupils who joined P1 in 2004, only 102,858 sat for UACE in 2016 — a staggering 94.4% dropout rate.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                      #1
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Highest in East Africa</h3>
                    <p className="text-muted-foreground text-sm">
                      Uganda has the highest school dropout rate in East Africa, with rates significantly higher for females, per UNESCO reports.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={300}>
              <div className="max-w-3xl mx-auto mt-12 text-center">
                <p className="text-muted-foreground leading-relaxed">
                  The high dropout rates are driven by hidden costs — exercise books, pens, uniforms, and other scholastic materials that families living on less than a dollar a day simply cannot afford. As a result, many children end up trapped in a vicious cycle of poverty. <strong className="text-foreground">That&apos;s why we exist.</strong>
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimateOnScroll>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                      <Target className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      {missionVision.mission}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                      <Eye className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      {missionVision.vision}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* SDG 4 Alignment */}
            <AnimateOnScroll delay={300}>
              <div className="mt-12 pt-12 border-t border-primary-foreground/20">
                <div className="flex flex-col md:flex-row items-center gap-6 justify-center text-center md:text-left">
                  <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div className="max-w-2xl">
                    <h3 className="font-heading text-xl font-bold mb-2">Aligned with UN Sustainable Development Goal 4</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      Our work directly supports SDG 4: Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. We are committed to reducing educational inequality through practical, on-the-ground interventions.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Our Core Values
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  These principles guide everything we do and how we serve our communities.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimateOnScroll delay={0}>
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Compassion</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We approach our work with genuine care for the children and communities we serve, understanding their unique challenges and needs.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Community</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe in the power of working together. Our partnerships with schools, donors, and volunteers create lasting change.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <Card className="h-full border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to making a measurable difference. Every book printed, every school reached, every child helped matters.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Meet Our Team
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Dedicated individuals working tirelessly to bring education to every child.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {teamMembers.map((member, index) => (
                <AnimateOnScroll key={member.name} delay={index * 100}>
                  <Card className="h-full border-0 shadow-lg overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-heading font-semibold text-xl mb-1 text-foreground">{member.name}</h3>
                      <p className="text-secondary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  What People Say
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Testimonials from those who have witnessed our impact firsthand.
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

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Be Part of Our Story
                </h2>
                <p className="text-lg mb-8 text-secondary-foreground/90">
                  Join us in writing the next chapter of hope and opportunity for Uganda&apos;s children.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Link href="/donate#payment-methods" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Support Our Mission
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-green-600 hover:bg-secondary-foreground/10">
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
