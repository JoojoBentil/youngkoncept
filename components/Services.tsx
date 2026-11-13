"use client";

const services = [
  {
    id: 1,
    title: "Photography",
    description: "Professional photography for all occasions - portraits, events, corporate, product photography and more.",
    features: ["Event Photography", "Corporate Photography", "Product Photography", "Portrait Sessions"],
    icon: "📷",
    category: "Visual"
  },
  {
    id: 2,
    title: "Videography",
    description: "Cinematic video production, editing, and post-production services for weddings, events, and corporate projects.",
    features: ["Wedding Videos", "Event Coverage", "Video Editing", "Corporate Videos"],
    icon: "🎥",
    category: "Visual"
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Creative graphic design solutions including branding, logos, and marketing materials.",
    features: ["Branding & Logos", "Business Cards", "Brochures & Flyers", "Invitation Cards"],
    icon: "🎨",
    category: "Design"
  },
  {
    id: 4,
    title: "Social Media Strategy",
    description: "Comprehensive social media planning, content creation, and campaign execution to grow your brand.",
    features: ["Strategy Planning", "Content Creation", "Campaign Management", "Analytics & Reporting"],
    icon: "📱",
    category: "Digital"
  },
  {
    id: 5,
    title: "Digital Offset Printing",
    description: "Ghana's first digital offset printing - high quality, fast turnaround, on-demand printing solutions.",
    features: ["Business Cards", "Brochures", "Certificates", "Annual Reports"],
    icon: "🖨️",
    category: "Printing"
  },
  {
    id: 6,
    title: "Large Format Print",
    description: "Advanced large format printing up to 1440dpi using Mimaki printers for banners, posters, and signage.",
    features: ["Banners & Posters", "Vehicle Wraps", "Wall Graphics", "Outdoor Signage"],
    icon: "📐",
    category: "Printing"
  },
  {
    id: 7,
    title: "3D Print & Varnish",
    description: "Premium 3D spot varnish, 3D gold and silver printing for luxury business cards and special materials.",
    features: ["3D Spot Varnish", "Gold & Silver Print", "Premium Cards", "Luxury Finishes"],
    icon: "✨",
    category: "Premium"
  },
  {
    id: 8,
    title: "Branding & Animations",
    description: "Complete branding solutions and animated content for digital marketing and brand identity.",
    features: ["Brand Identity", "Animations", "Motion Graphics", "Logo Animation"],
    icon: "🎬",
    category: "Design"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-text-body mb-12 max-w-2xl mx-auto">
          From photography to printing, we offer comprehensive creative and communication solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-800 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 border-2 border-zinc-700 hover:border-primary"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                {service.category}
              </div>
              
              <h3 className="font-serif text-xl font-bold mb-2">{service.title}</h3>
              
              <p className="text-text-body text-sm mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-text-body">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-secondary hover:bg-primary text-black font-semibold py-2 rounded-lg transition-colors duration-300 text-sm"
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">
            Need a <span className="text-primary">Custom Solution?</span>
          </h3>
          <p className="text-text-body mb-6">
            We also offer custom packages tailored to your specific needs. Contact us to discuss your project requirements.
          </p>
          <button
            onClick={() => {
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-secondary hover:bg-primary text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
