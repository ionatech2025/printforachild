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
import { paymentInfo } from "@/lib/data"

const donationAmounts = [
  { value: "10000", label: "UGX 10,000", impact: "A first set of reading materials" },
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
  { number: "1,700+", label: "Books Distributed", icon: BookOpen },
  { number: "11+", label: "Schools Reached", icon: Building2 },
  { number: "560+", label: "Children Impacted", icon: Users },
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("10000")
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const dialablePhone = paymentInfo.mobileMoneyNumber.replace(/\s+/g, "")

  const getDisplayAmount = () => {
    if (selectedAmount === "custom") {
      return customAmount ? `UGX ${parseInt(customAmount).toLocaleString()}` : "Custom Amount"
    }
    return `UGX ${parseInt(selectedAmount).toLocaleString()}`
  }

  const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?${new URLSearchParams({
    cmd: "_donations",
    business: paymentInfo.paypalBusinessEmail,
    currency_code: "USD",
    item_name: paymentInfo.paypalItemName,
  }).toString()}`

  const mobileMoneyWhatsAppUrl = `https://wa.me/${dialablePhone.replace(/^\+/, "")}?text=${encodeURIComponent(
    `Hello Print for a Child Foundation, I would like to make a ${donationType === "monthly" ? "monthly" : "one-time"} donation of ${getDisplayAmount()} via mobile money. Please guide me on the next step.`
  )}`

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/media/client-april-2026/book-handout.jpg"
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
                In Uganda, 43% of children drop out before Primary 7 — largely because families cannot afford basic scholastic materials.
                Your donation helps us print and distribute books to children who need them most.
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
        <section id="payment-methods" className="scroll-mt-28 py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Donation Form */}
              <div className="lg:col-span-3">
                <AnimateOnScroll>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Make Your Donation</CardTitle>
                      <CardDescription>
                        Choose an amount and continue with mobile money or PayPal to support children&apos;s literacy in Uganda.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
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

                          {/* Summary & External Payment Links */}
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
                            <p className="text-sm text-muted-foreground text-center mb-2">
                              Choose your preferred payment method:
                            </p>
                            <div className="grid gap-4">
                              <div className="rounded-xl border border-primary/10 bg-background p-4 text-left">
                                <p className="font-semibold text-foreground">Donate via {paymentInfo.mobileMoneyLabel}</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                  Use our verified number{" "}
                                  <a href={`tel:${dialablePhone}`} className="font-medium text-primary hover:underline">
                                    {paymentInfo.mobileMoneyNumber}
                                  </a>{" "}
                                  and mention {getDisplayAmount()} when you contact us.
                                </p>
                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                  <Button asChild size="lg" className="w-full">
                                    <a href={`tel:${dialablePhone}`}>
                                      Start Mobile Money
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                  </Button>
                                  <Button asChild size="lg" variant="outline" className="w-full">
                                    <a href={mobileMoneyWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                                      WhatsApp Us
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                  </Button>
                                </div>
                              </div>
                              <div className="rounded-xl border border-border bg-background p-4 text-left">
                                <p className="font-semibold text-foreground">Donate via PayPal</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                  Open secure PayPal checkout in a new tab and complete your donation there.
                                </p>
                                <Button asChild size="lg" variant="outline" className="mt-4 w-full">
                                  <a href={paypalUrl} target="_blank" rel="noopener noreferrer">
                                    Continue to PayPal
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                            <p className="text-xs text-center text-muted-foreground">
                              Mobile money and PayPal are completed outside this website for security.
                            </p>
                            {donationType === "monthly" && (
                              <p className="text-xs text-center text-muted-foreground">
                                For monthly giving, tell us you want a recurring donation when you contact us or when you reach PayPal.
                              </p>
                            )}
                            <p className="text-xs text-center text-muted-foreground">
                              Need help? Call{" "}
                              <a href={`tel:${dialablePhone}`} className="text-primary hover:underline">
                                {paymentInfo.mobileMoneyNumber}
                              </a>
                              .
                            </p>
                          </div>
                        </div>
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
                          Verified mobile money contact line
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Secure third-party PayPal checkout
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Transparent follow-up on where support goes
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
                            Contact us for current bank details before sending a transfer.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Mobile Money</h4>
                          <p className="text-muted-foreground">
                            {paymentInfo.mobileMoneyLabel}:{" "}
                            <a href={`tel:${dialablePhone}`} className="text-primary hover:underline">
                              {paymentInfo.mobileMoneyNumber}
                            </a>
                          </p>
                          <p className="mt-1 text-muted-foreground">
                            Or{" "}
                            <a href={mobileMoneyWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              message us on WhatsApp
                            </a>
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
                      src="/media/client-april-2026/classroom-reading.png"
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
                  Uganda has the highest school dropout rate in East Africa. Many parents live on less than a dollar a day and cannot afford basic scholastic materials.
                  Your support directly helps us break this cycle.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Immediate Impact",
                  description: "Your donation directly funds curriculum-aligned textbooks, exercise books, and learning materials distributed to schools within weeks.",
                  icon: BookOpen,
                },
                {
                  title: "Reduce Dropout Rates",
                  description: "By providing essential scholastic materials, we help keep children in school — tackling the hidden costs that drive Uganda's 43% dropout rate.",
                  icon: Users,
                },
                {
                  title: "Build a Reading Culture",
                  description: "Every book fosters lifelong learning. We support Uganda's national education goals and UN SDG 4 for inclusive, quality education.",
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
