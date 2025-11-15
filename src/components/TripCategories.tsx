import { Link } from "react-router-dom";

const categories = [
  {
    icon: "/bagpack.png",
    title: "Backpacking Trips",
    href: "/backpacking-trips"
  },
  {
    icon: "/traveling.webp",
    title: "Adventure Treks",
    href: "/domestic-trips"
  },
  {
    icon: "/glasses.webp",
    title: "International Trips",
    href: "/international-trips"
  },
  {
    icon: "/van.webp",
    title: "Weekend Getaways",
    href: "/weekend-trips"
  },
  {
    icon: "/handshake.webp",
    title: "Corporate Trips",
    href: "/corporate-tours"
  }
];

const TripCategories = () => {
  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Mobile: 2x3 grid, Desktop: horizontal */}
        <div className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center md:gap-24">
          {categories.map((category, index) => {
            return (
              <Link
                key={category.title}
                to={category.href}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Circular icon container */}
                <div className="w-20 h-20 md:w-32 md:h-32 bg-[#0B3A55] rounded-full flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 group-hover:bg-blue-900 group-hover:scale-105 shadow-lg">
                  <img src={category.icon} alt={category.title} className="h-12 w-12 md:h-16 md:w-16" />
                </div>

                {/* Category title */}
                <h3 className="text-center font-semibold text-foreground text-xs md:text-base leading-tight">
                  {category.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TripCategories;