export default function FeaturedGallery() {
  const images = [
    "/asset/1.jpeg",
    "/asset/2.jpeg",
    "/asset/3.jpeg",
    "/asset/4.jpeg",
    "/asset/5.jpeg",
    "/asset/6.jpeg",
    "/asset/7.jpeg",
    "/asset/8.jpeg",
    "/asset/9.jpeg",
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 grid-flow-row-dense">
      {images.map((src, index) => {
        // Make the 1st and 5th images large (2x2 span)
        const isLarge = index === 0 || index === 4;
        const layoutClasses = isLarge
          ? "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto"
          : "aspect-[4/5]";

        return (
          <div
            key={index}
            className={`group overflow-hidden cursor-pointer relative bg-stone-200 ${layoutClasses}`}
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500 z-10" />
            <div
              className={`absolute z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity ${
                isLarge ? "bottom-8 left-8" : "bottom-6 left-6"
              }`}
            >
              <p className="uppercase text-[10px] tracking-widest mb-1">
                Gym
              </p>
              <p className="font-serif text-xl md:text-2xl">
                Story {index + 1}
              </p>
            </div>
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${src}')` }}
            />
          </div>
        );
      })}
    </section>
  );
}
