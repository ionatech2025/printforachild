"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, BookOpen, Users, Building2, Gift, Shield, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const donationAmounts = [
  { value: "25000", label: "UGX 25,000", impact: "2 storybooks for a child" },
  { value: "50000", label: "UGX 50,000", impact: "5 books for young readers" },
  { value: "100000", label: "UGX 100,000", impact: "Classroom reading corner" },
  { value: "250000", label: "UGX 250,000", impact: "School library starter kit" },
  { value: "500000", label: "UGX 500,000", impact: "Full school book distribution" },
  { value: "custom", label: "Custom Amount", impact: "Every contribution counts" },
]

const donationTypes = [
  { value: "one-time", label: "One-Time Gift" },
  { value: "monthly", label: "Monthly Giving" },
]

const impactStats = [
  { number: "15,000+", label: "Books Distributed", icon: BookOpen },
  { number: "50+", label: "Schools Reached", icon: Building2 },
  { number: "10,000+", label: "Children Impacted", icon: Users },
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("100000")
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const getDisplayAmount = () => {
    if (selectedAmount === "custom") {
      return customAmount ? `UGX ${parseInt(customAmount).toLocaleString()}` : "Custom Amount"
    }
    return `UGX ${parseInt(selectedAmount).toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260314_084537-hOPQcW4ndRa9HukSuXJ4HqPwiMqOs4.jpg"
              alt="Happy children with books"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-6">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Make a Difference Today</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Give the Gift of Literacy
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Your donation helps us print and distribute books to children who need them most. 
                Every book opens a door to a brighter future.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-muted/50 border-b">
          <div className="container">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              {impactStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <stat.icon className="h-8 w-8 text-primary mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Donation Form */}
              <div className="lg:col-span-3">
                <AnimateOnScroll>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Make Your Donation</CardTitle>
                      <CardDescription>
                        Choose an amount and complete your donation to support children&apos;s literacy in Uganda.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isSubmitted ? (
                        <div className="text-center py-12">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Thank You for Your Generosity!</h3>
                          <p className="text-muted-foreground mb-2">
                            Your donation of <span className="font-semibold text-foreground">{getDisplayAmount()}</span> has been received.
                          </p>
                          <p className="text-muted-foreground mb-8">
                            A confirmation email will be sent to you shortly with details about your donation and how it will be used.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={() => setIsSubmitted(false)}>
                              Make Another Donation
                            </Button>
                            <Button asChild variant="outline">
                              <Link href="/our-work">See Our Impact</Link>
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                          {/* Donation Type */}
                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Donation Type</Label>
                            <RadioGroup 
                              value={donationType} 
                              onValueChange={setDonationType}
                              className="grid grid-cols-2 gap-4"
                            >
                              {donationTypes.map((type) => (
                                <Label
                                  key={type.value}
                                  htmlFor={type.value}
                                  className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    donationType === type.value 
                                      ? "border-primary bg-primary/5" 
                                      : "border-border hover:border-primary/50"
                                  }`}
                                >
                                  <RadioGroupItem value={type.value} id={type.value} className="sr-only" />
                                  <span className="font-medium">{type.label}</span>
                                </Label>
                              ))}
                            </RadioGroup>
                          </div>

                          {/* Donation Amount */}
                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Select Amount</Label>
                            <RadioGroup 
                              value={selectedAmount} 
                              onValueChange={setSelectedAmount}
                              className="grid grid-cols-2 md:grid-cols-3 gap-4"
                            >
                              {donationAmounts.map((amount) => (
                                <Label
                                  key={amount.value}
                                  htmlFor={`amount-${amount.value}`}
                                  className={`flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
                                    selectedAmount === amount.value 
                                      ? "border-primary bg-primary/5" 
                                      : "border-border hover:border-primary/50"
                                  }`}
                                >
                                  <RadioGroupItem value={amount.value} id={`amount-${amount.value}`} className="sr-only" />
                                  <span className="font-bold text-lg text-foreground">{amount.label}</span>
                                  <span className="text-xs text-muted-foreground mt-1">{amount.impact}</span>
                                </Label>
                              ))}
                            </RadioGroup>

                            {selectedAmount === "custom" && (
                              <div className="mt-4">
                                <Label htmlFor="customAmount">Enter Amount (UGX)</Label>
                                <Input
                                  id="customAmount"
                                  type="number"
                                  value={customAmount}
                                  onChange={(e) => setCustomAmount(e.target.value)}
                                  placeholder="Enter amount"
                                  min="5000"
                                  className="mt-2"
                                />
                              </div>
                            )}
                          </div>

                          {/* Donor Information */}
                          <div className="space-y-4">
                            <Label className="text-base font-semibold">Your Information</Label>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="donorName">Full Name *</Label>
                                <Input id="donorName" name="donorName" required placeholder="John Doe" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="donorEmail">Email Address *</Label>
                                <Input id="donorEmail" name="donorEmail" type="email" required placeholder="john@example.com" />
                              </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="donorPhone">Phone Number</Label>
                                <Input id="donorPhone" name="donorPhone" type="tel" placeholder="+256 700 000 000" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="donorOrg">Organization (Optional)</Label>
                                <Input id="donorOrg" name="donorOrg" placeholder="Company Name" />
                              </div>
                            </div>
                          </div>

                          {/* Summary & Submit */}
                          <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-foreground">Donation Amount:</span>
                              <span className="text-xl font-bold text-primary">{getDisplayAmount()}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">Type:</span>
                              <span className="text-foreground">{donationType === "monthly" ? "Monthly" : "One-time"}</span>
                            </div>
                            <hr />
                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>Processing...</>
                              ) : (
                                <>
                                  Complete Donation
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                              )}
                            </Button>
                            <p className="text-xs text-center text-muted-foreground">
                              By donating, you agree to our terms and privacy policy
                            </p>
                          </div>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <AnimateOnScroll>
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <Gift className="h-10 w-10 mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Your Impact</h3>
                      <p className="opacity-90 text-sm">
                        Every donation goes directly to printing and distributing books to children in underserved communities across Uganda.
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll>
                  <Card>
                    <CardContent className="p-6">
                      <Shield className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-lg font-bold mb-2 text-foreground">Secure & Transparent</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          100% of donations fund our programs
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Tax-deductible contributions
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Secure payment processing
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Regular impact reports
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4 text-foreground">Other Ways to Give</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-foreground">Bank Transfer</h4>
                          <p className="text-muted-foreground">
                            Equity Bank Uganda<br />
                            Account: 1234567890123<br />
                            Swift: EQBLUGKA
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Mobile Money</h4>
                          <p className="text-muted-foreground">
                            MTN: 0776 123 456<br />
                            Airtel: 0750 123 456
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">In-Kind Donations</h4>
                          <p className="text-muted-foreground">
                            We accept book donations.{" "}
                            <Link href="/contact" className="text-primary hover:underline">
                              Contact us
                            </Link>{" "}
                            to arrange.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250518_172833-SPWejZxQVSXLeJQdGYF7xxrxNb7vod.jpg"
                      alt="Happy children with their new books"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white text-sm font-medium">
                        &quot;These books changed my life!&quot; - Happy students at Blessed Foundation School
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Your Donation Matters
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  In Uganda, many children lack access to books and educational materials. 
                  Your support helps us bridge this gap.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Immediate Impact",
                  description: "Your donation directly funds the printing and distribution of books to schools within weeks.",
                  icon: BookOpen,
                },
                {
                  title: "Long-term Change",
                  description: "Literacy opens doors to education, employment, and breaking the cycle of poverty.",
                  icon: Users,
                },
                {
                  title: "Community Growth",
                  description: "When children read, entire communities benefit through improved education outcomes.",
                  icon: Building2,
                },
              ].map((item, index) => (
                <AnimateOnScroll key={index}>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
