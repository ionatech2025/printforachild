"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Mail } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mailchimp embedded form submission
    // Replace YOUR_MAILCHIMP_U and YOUR_MAILCHIMP_ID with your actual Mailchimp values
    // You can find these in your Mailchimp embedded form code
    const mailchimpUrl = `https://printforachild.us1.list-manage.com/subscribe/post?u=YOUR_MAILCHIMP_U&id=YOUR_MAILCHIMP_ID&EMAIL=${encodeURIComponent(email)}`
    
    // Open in new window for Mailchimp confirmation
    window.open(mailchimpUrl, "_blank", "width=500,height=600")
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <CheckCircle2 className="h-4 w-4 text-secondary" />
        <span>Check your email to confirm subscription!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="pl-9 bg-background/10 border-white/20 text-white placeholder:text-white/60"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      >
        {isSubmitting ? "..." : "Subscribe"}
      </Button>
    </form>
  )
}
