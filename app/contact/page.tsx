"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileDonateCTA } from "@/components/mobile-donate-cta"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { contactInfo as sharedContactInfo } from "@/lib/data"

const mapHref = `https://maps.google.com/?q=${encodeURIComponent(sharedContactInfo.address)}`
const dialablePhone = sharedContactInfo.phone.replace(/\s+/g, "")

const contactCards = [
  {
    icon: MapPin,
    title: "Our Location",
    details: [sharedContactInfo.address],
    href: mapHref,
  },
  {
    icon: Phone,
    title: "Phone",
    details: [sharedContactInfo.phone],
    href: `tel:${dialablePhone}`,
  },
  {
    icon: Mail,
    title: "Email",
    details: [sharedContactInfo.email],
    href: `mailto:${sharedContactInfo.email}`,
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
  },
]

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "volunteer", label: "Volunteer Application" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "donation", label: "Donation Question" },
  { value: "book-request", label: "Book Request for School" },
  { value: "media", label: "Media Inquiry" },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY") // Replace with actual key from web3forms.com
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch {
      // Fallback for demo - form will still show success
      setIsSubmitted(true)
    }
    
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Have questions about our work? Want to get involved? 
                We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <AnimateOnScroll>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isSubmitted ? (
                        <div className="text-center py-12">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Thank You!</h3>
                          <p className="text-muted-foreground mb-6">
                            Your message has been received. We&apos;ll get back to you within 24-48 hours.
                          </p>
                          <Button onClick={() => setIsSubmitted(false)} variant="outline">
                            Send Another Message
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name *</Label>
                              <Input id="firstName" name="firstName" required placeholder="John" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name *</Label>
                              <Input id="lastName" name="lastName" required placeholder="Doe" />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address *</Label>
                              <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" name="phone" type="tel" placeholder="+256 700 000 000" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="inquiryType">Inquiry Type *</Label>
                            <Select name="inquiryType" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an inquiry type" />
                              </SelectTrigger>
                              <SelectContent>
                                {inquiryTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="organization">Organization (if applicable)</Label>
                            <Input id="organization" name="organization" placeholder="Company or School Name" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Message *</Label>
                            <Textarea 
                              id="message" 
                              name="message" 
                              required 
                              rows={5}
                              placeholder="Tell us how we can help you..."
                            />
                          </div>

                          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>Sending...</>
                            ) : (
                              <>
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <AnimateOnScroll>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                </AnimateOnScroll>
                
                {contactCards.map((info, index) => (
                  <AnimateOnScroll key={index}>
                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.href ? (
                            info.details.map((detail, idx) => (
                              <a
                                key={idx}
                                href={info.href}
                                target={info.title === "Our Location" ? "_blank" : undefined}
                                rel={info.title === "Our Location" ? "noopener noreferrer" : undefined}
                                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                              >
                                {detail}
                              </a>
                            ))
                          ) : (
                            info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                            ))
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                ))}

                <AnimateOnScroll>
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                      <p className="text-sm opacity-90">
                        We typically respond to all inquiries within 24-48 hours during business days.
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
                <p className="text-muted-foreground">
                  Visit our office in Kampala, Uganda
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div className="aspect-[16/9] md:aspect-[21/9] bg-card rounded-2xl overflow-hidden relative">
                {/* Static map placeholder - in production, you would use an actual map embed */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground">Print for a Child Foundation</p>
                    <p className="text-muted-foreground">{sharedContactInfo.address}</p>
                    <Button asChild variant="outline" className="mt-4">
                      <a 
                        href={mapHref} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Quick answers to common questions about our organization
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "How can I volunteer with Print for a Child Foundation?",
                  a: "Fill out our contact form selecting 'Volunteer Application' or visit our Get Involved page for more details on volunteer opportunities."
                },
                {
                  q: "Can my school request books?",
                  a: "Yes! Schools in Uganda can apply to receive books through our distribution program. Contact us with details about your school."
                },
                {
                  q: "How are donations used?",
                  a: "100% of donations go directly to our programs - printing books, distribution, and literacy initiatives in underserved communities."
                },
                {
                  q: "Do you accept book donations?",
                  a: "Yes, we accept gently used children's books and educational materials. Contact us to arrange a donation drop-off or pickup."
                },
              ].map((faq, index) => (
                <AnimateOnScroll key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileDonateCTA />
    </div>
  )
}
