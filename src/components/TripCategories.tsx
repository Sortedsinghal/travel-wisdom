import {
  Backpack,
  Car,
  Mountain,
  Heart,
  Users
} from "lucide-react";

const categories = [
  {
    icon: Backpack,
    title: "Backpacking Trips",
    href: "#"
  },
  {
    icon: Car,
    title: "Weekend Getaways",
    href: "#"
  },
  {
    icon: Mountain,
    title: "Adventure Treks",
    href: "#"
  },
  {
    icon: Heart,
    title: "Honeymoon Trips",
    href: "#"
  },
  {
    icon: Users,
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
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Circular icon container */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-800 group-hover:scale-105 shadow-lg">
                  <Icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
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