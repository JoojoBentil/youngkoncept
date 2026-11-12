"use client";

const services = [
  {
    id: 1,
    title: "Portrait Shoot",
    price: "GH₵300",
    description: "Professional portrait photography that captures your personality and style.",
    features: ["1-hour session", "15+ edited photos", "Indoor/outdoor options", "Professional lighting"],
    icon: "👤"
  },
  {
    id: 2,
    title: "Wedding Photography",
    price: "GH₵1,500",
    description: "Complete wedding day coverage preserving every precious moment.",
    features: ["Full day coverage", "200+ edited photos", "Engagement shoot included", "Online gallery"],
    icon: "💍",
    popular: true
  },
  {
    id: 3,
    title: "Birthday Photography",
    price: "GH₵500",
    description: "Celebrate your special day with beautiful birthday photography.",
    features: ["3-hour coverage", "50+ edited photos", "Candid & posed shots", "Props available"],
    icon: "🎂"
  },
  {
    id: 4,
    title: "Graduation Photography",
    price: "GH₵400",
    description: "Commemorate your academic achievements with professional photos.",
    features: ["2-hour session", "30+ edited photos", "Cap & gown photos", "Family group shots"],
    icon: "🎓"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Services & <span className="text-gold-400">Pricing</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Choose the perfect photography package for your special occasion
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-zinc-800 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 border-2 ${
                service.popular
                  ? "border-gold-500 shadow-lg shadow-gold-500/20"
                  : "border-zinc-700 hover:border-gold-400"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-4 bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-5xl mb-4">{service.icon}</div>
              
              <h3 className="font-serif text-2xl font-bold mb-2">{service.title}</h3>
              
              <div className="text-gold-400 text-3xl font-bold mb-4">{service.price}</div>
              
              <p className="text-gray-400 text-sm mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-300">
                    <span className="text-gold-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 rounded-lg transition-colors duration-300"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
