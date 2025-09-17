import { Card } from "@/components/ui/card";
import { 
  Backpack, 
  Car, 
  Plane, 
  Mountain, 
  Heart, 
  Users,
  Compass,
  Camera
} from "lucide-react";

const categories = [
  {
    icon: Backpack,
    title: "Backpacking Trips",
    description: "Adventure awaits the bold",
    color: "text-island"
  },
  {
    icon: Car,
    title: "Weekend Getaways",
    description: "Quick escapes from routine",
    color: "text-sunset"
  },
  {
    icon: Plane,
    title: "International Trips",
    description: "Explore the world beyond",
    color: "text-primary"
  },
  {
    icon: Mountain,
    title: "Adventure Treks",
    description: "Conquer new heights",
    color: "text-island"
  },
  {
    icon: Heart,
    title: "Honeymoon Trips",
    description: "Romantic getaways",
    color: "text-destructive"
  },
  {
    icon: Users,
    title: "Corporate Trips",
    description: "Team building adventures",
    color: "text-tropical"
  },
  {
    icon: Compass,
    title: "Solo Adventures",
    description: "Discover yourself",
    color: "text-primary"
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture perfect moments",
    color: "text-sunset"
  }
];

const TripCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Explore Our Trip Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated selection of travel experiences designed to create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer card-shadow border-0 bg-card/80 backdrop-blur-sm"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TripCategories;