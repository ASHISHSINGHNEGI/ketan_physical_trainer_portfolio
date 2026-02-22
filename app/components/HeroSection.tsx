import { ArrowRight } from "lucide-react";
//this is for a gym trainer website
export default function HeroSection() {
  return (
    <section className="py-24 flex flex-col items-center text-center">
      <span className="uppercase tracking-[0.3em] text-[10px] mb-4 opacity-60">
        Physical Trainer
      </span>
      <h1 className="font-serif text-6xl md:text-8xl mb-8 font-light leading-tight">
        Keten
        <br />
        <span className="italic">The Beast</span>
      </h1>
      <p className="max-w-md text-sm leading-relaxed opacity-70 mb-10">
        A unique gym trainer experience built to serve you best & capture your
        special moments for you & your families.
      </p>
      <button className="border border-stone-300 px-8 py-3 rounded-full uppercase text-[10px] tracking-widest hover:bg-stone-900 hover:text-white transition-all flex items-center gap-2">
        See Stories <ArrowRight size={14} />
      </button>
    </section>
  );
}
