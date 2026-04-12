"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileDonateCTA } from "@/components/mobile-donate-cta"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Building2, Gift, BookOpen, HandHeart, Truck, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const volunteerOpportunities = [
  {
    title: "Book Distribution",
    description: "Join our team during school visits to help distribute books and engage with students",
    commitment: "1-2 days per month",
    icon: BookOpen,
  },
  {
    title: "Literacy Mentoring",
    description: "Spend time with children to help improve their reading skills and foster a love of learning",
    commitment: "2-4 hours per week",
    icon: GraduationCap,
  },
  {
    title: "Logistics Support",
    description: "Help with sorting, packing, and organizing book donations for distribution",
    commitment: "Flexible hours",
    icon: Truck,
  },
  {
    title: "Community Outreach",
    description: "Assist with awareness campaigns and community engagement activities",
    commitment: "Varies by project",
    icon: HandHeart,
  },
]

const partnershipTypes = [
  {
    title: "Corporate Partners",
    description: "Partner with us to fulfill your CSR goals while making a lasting impact on children's education",
    benefits: ["Tax-deductible donations", "Brand visibility at events", "Employee volunteer opportunities", "Impact reports"],
  },
  {
    title: "School Partners",
    description: "Schools can partner with us to receive books and educational materials for their students",
    benefits: ["Free educational materials", "Literacy program support", "Teacher training", "Regular book supplies"],
  },
  {
    title: "Publishing Partners",
    description: "Publishers can donate books or provide discounted rates to support our mission",
    benefits: ["Community goodwill", "Book placement in schools", "Author engagement opportunities", "Social impact reporting"],
  },
]

const donationOptions = [
  {
    amount: "UGX 50,000",
    impact: "Provides 5 children with storybooks for a year",
    icon: BookOpen,
  },
  {
    amount: "UGX 100,000",
    impact: "Equips a classroom with a reading corner library",
    icon: Users,
  },
  {
    amount: "UGX 500,000",
    impact: "Supports a full school book distribution event",
    icon: Building2,
  },
  {
    amount: "Custom Amount",
    impact: "Every contribution makes a difference in a child's life",
    icon: Gift,
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111620-jUmqqfEwZCi0ZuCSVzaLyDn9HNAxoL.jpg"
              alt="Children reading"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                With 43% of Ugandan pupils dropping out before Primary 7 and a 94.4% dropout rate before Advanced Level,
                the need has never been greater. Whether you volunteer your time, partner with us, or make a donation,
                your contribution changes lives.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-16 md:py-24">
          <div className="container">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">Volunteer With Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Give Your Time, Change a Life
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our volunteers are the heart of our organization. Join our team and 
                  experience the joy of putting books into the hands of children.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {volunteerOpportunities.map((opportunity, index) => (
                <AnimateOnScroll key={index}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <opportunity.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                      <CardDescription>{opportunity.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Time commitment:</span> {opportunity.commitment}
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Apply to Volunteer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section id="partner" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-4">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Partner With Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Strategic Partnerships
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We collaborate with organizations that share our vision of a literate Uganda. 
                  Explore partnership opportunities that align with your mission.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((partnership, index) => (
                <AnimateOnScroll key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{partnership.title}</CardTitle>
                      <CardDescription className="text-base">{partnership.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-foreground">Benefits:</h4>
                      <ul className="space-y-2">
                        {partnership.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll>
              <div className="mt-12 bg-card rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Current Partners</h3>
                <p className="text-muted-foreground mb-8">
                  We are proud to work with organizations committed to children&apos;s education
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                  <div className="text-lg font-semibold text-foreground">NCDC Uganda</div>
                  <div className="text-lg font-semibold text-foreground">Literacy Cloud</div>
                  <div className="text-lg font-semibold text-foreground">St. Mary&apos;s Junior School</div>
                  <div className="text-lg font-semibold text-foreground">Fountain Publishers</div>
                </div>
                <div className="mt-8">
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">
                      Become a Partner
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate" className="py-16 md:py-24">
          <div className="container">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-medium">Support Our Work</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Make a Donation
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your generous donation helps us print and distribute books to children 
                  who need them most. Every contribution makes a difference.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {donationOptions.map((option, index) => (
                <AnimateOnScroll key={index}>
                  <Card className="h-full text-center hover:shadow-lg transition-shadow hover:border-primary">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <option.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl text-primary">{option.amount}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{option.impact}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll>
              <div className="max-w-2xl mx-auto bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
                <Heart className="h-12 w-12 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
                <p className="mb-8 opacity-90">
                  Your donation is tax-deductible and 100% goes towards our mission of 
                  providing books to underserved children in Uganda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                    <Link href="/donate">
                      Donate Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/contact">
                      Contact Us First
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* In-Kind Donations */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250519_111626-PsURhhbJHDroCGIrvFZsvdWFCeS0MI.jpg"
                    alt="Children with donated books"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    In-Kind Donations
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We also accept in-kind donations! Beyond books, we provide a wide range of scholastic
                    materials to help keep children in school and support their learning journey.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Textbooks, storybooks, and picture books</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Exercise books, pens, and stationery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">School uniforms and clothing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Shoes and footwear for students</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Reading aids and educational games</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/contact">
                      Arrange a Book Donation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileDonateCTA />
    </div>
  )
}
