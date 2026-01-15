import Image from "next/image";

const STEPS = [
  {
    title: "Upload your files",
    description: "Upload documents, photos or designs in seconds.",
    image: "/images/how-it-works/upload.jpg",
  },
  {
    title: "Choose print options",
    description: "Select paper type, color, binding and quantity.",
    image: "/images/how-it-works/options.jpg",
  },
  {
    title: "Get it delivered",
    description: "We print and deliver to your doorstep.",
    image: "/images/how-it-works/delivery.jpg",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          How it works
        </h2>

        <p className="mt-3 text-center text-gray-600 max-w-xl mx-auto">
          Printing made simple in just three easy steps.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl border bg-white overflow-hidden transition hover:shadow-lg"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
