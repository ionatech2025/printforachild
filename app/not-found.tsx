import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Oops! The page you&apos;re looking for seems to have wandered off like a book 
              waiting to find its reader. Let&apos;s get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-12 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                Looking for something specific? Try these popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="text-primary hover:underline">About Us</Link>
                <Link href="/our-work" className="text-primary hover:underline">Our Work</Link>
                <Link href="/get-involved" className="text-primary hover:underline">Get Involved</Link>
                <Link href="/donate#payment-methods" className="text-primary hover:underline">Donate</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
