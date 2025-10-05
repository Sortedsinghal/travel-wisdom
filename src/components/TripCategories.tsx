const categories = [
  {
    icon: "/public/bagpack.png",
    title: "Backpacking Trips",
    href: "#"
  },
  {
    icon: "/public/traveling.webp",
    title: "Adventure Treks",
    href: "#"
  },
  {
    icon: "/public/glasses.webp",
    title: "Honeymoon Trips",
    href: "#"
  },
  {
    icon: "/public/van.webp",
    title: "Weekend Getaways",
    href: "#"
  },
  {
    icon: "/public/handshake.webp",
    title: "Corporate Trips",
    href: "#"
  }
];

const TripCategories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          {categories.map((category, index) => {
            return (
              <div
                key={category.title}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Circular icon container */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0B3A55] rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-900 group-hover:scale-105 shadow-lg">
                  <img src={category.icon} alt={category.title} className="h-15 w-15 md:h-16 md:w-16" />
                </div>

                {/* Category title */}
                <h3 className="text-center font-semibold text-foreground text-sm md:text-base whitespace-nowrap">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TripCategories;
