import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
              alt="About Youngkoncept"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </div>

          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Youngkoncept</span>
            </h2>
            <div className="space-y-4 text-text-body leading-relaxed">
              <p className="text-primary font-semibold text-lg">
                We Energize the brands of our clients to ensure they get the maximum results and return on their investments!
              </p>
              <p>
                <strong className="text-white">Young Koncept</strong> is one of the nation&apos;s fastest-growing independent integrated Photography & communications companies. We offer a full range of Integrated Communications and public relations services. From initial market research and strategic planning to editorial services, multimedia, blog & vlog consulting, social media strategy & execution, event planning, and more.
              </p>
              <p>
                Any business runs on a value proposition that benefits its customers. We help you define that value and communicate it to the people who matter — customers, prospects, influencers. We engage the people you must reach by driving your business&apos; workings to their best performance by encompassing all communications into crisp, focused, relevant messaging.
              </p>
              <p className="text-primary font-semibold italic text-lg mt-6">
                &quot;We create to inspire&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
