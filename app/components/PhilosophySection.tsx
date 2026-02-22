import { Dumbbell, Instagram } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="border-t border-stone-200 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div className="font-serif text-4xl leading-snug">
        &quot;I believe fitness is a lifelong journey, not just of transforming
        the body, but of forging an{" "}
        <span className="italic text-stone-400">unbreakable mind.</span>&quot;
      </div>
      <div className="text-sm text-stone-500 leading-loose space-y-4">
        <p>
          My approach is intense and disciplined, focusing on the techniques
          that make your transformation truly lasting. I don&apos;t just count
          reps; I help you build the strength to conquer life&apos;s challenges
          and push past your own limits.
        </p>
        <div className="flex gap-4 pt-4">
          <Instagram
            size={18}
            className="text-stone-400 cursor-pointer hover:text-stone-900"
          />
          <Dumbbell
            size={18}
            className="text-stone-400 cursor-pointer hover:text-stone-900"
          />
        </div>
      </div>
    </section>
  );
}
