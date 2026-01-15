import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Print. Simple. Delivered.
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-md">
            Upload your files and get high-quality prints delivered to your doorstep.
          </p>

          <div className="mt-8 flex gap-4">
            <Button size="lg">
              Upload & Print
            </Button>
            <Button size="lg" variant="outline">
              Explore Pricing
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-95 w-full">
          <Image
            src="/images/hero/printing-hero.webp"
            alt="Printing service illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
