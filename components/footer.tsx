import Link from 'next/link'
import Image from 'next/image'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { navLinks, contactInfo } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRINT%20FOR%20A%20CHILD-RgkYN0VfsnioTVBuHYMiY9lApppAeI.jpg"
                alt="Print for a Child Foundation Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-xl text-background">
                Print for a Child
              </span>
            </Link>
            <p className="text-background/80 leading-relaxed">
              Empowering Ugandan children through education by providing quality printed study materials to those who need them most.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-background">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-background">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-background">Stay Updated</h3>
            <p className="text-background/80 mb-4">
              Subscribe to our newsletter for updates on our impact and how you can help.
            </p>
            {/* Mailchimp Form Embed - Replace with your Mailchimp form */}
            <form
              action="https://printforachild.us1.list-manage.com/subscribe/post"
              method="POST"
              target="_blank"
              className="space-y-3"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              {currentYear} Print for a Child Foundation. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for the children of Uganda
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
