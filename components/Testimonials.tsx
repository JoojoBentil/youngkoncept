const testimonials = [
  {
    id: 1,
    name: "Akosua Mensah",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop",
    text: "YOUNGKONCEPT captured our wedding beautifully! Every moment was perfectly documented. The team was professional, creative, and made us feel so comfortable. Our photos are absolutely stunning!",
    rating: 5
  },
  {
    id: 2,
    name: "Kwame Asante",
    role: "Graduate",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    text: "I couldn't have asked for better graduation photos! The attention to detail and the creative shots made my day even more special. Highly recommend YOUNGKONCEPT for any occasion!",
    rating: 5
  },
  {
    id: 3,
    name: "Ama Boateng",
    role: "Fashion Influencer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    text: "Working with YOUNGKONCEPT has been an amazing experience. They understand fashion photography like no other. The portfolio shots are editorial quality. Simply the best in Accra!",
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="text-center text-text-body mb-12 max-w-2xl mx-auto">
          Don&apos;t just take our word for it—hear from those who have experienced our work
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-zinc-900 rounded-lg p-8 border border-zinc-800 hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>

              <p className="text-text-body leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
