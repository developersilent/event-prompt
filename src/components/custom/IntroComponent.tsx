
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function IntroComponent() {
  return (
	 <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Up-to-Date</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Subscribe to our newsletter to receive the latest travel news, destination guides, and exclusive offers.
          </p>
          <form className="flex gap-2 w-full max-w-sm">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
  )
}

