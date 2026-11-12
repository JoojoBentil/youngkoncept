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
              About <span className="text-gold-400">Youngkoncept</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Welcome to <strong className="text-gold-400">YOUNGKONCEPT</strong>, where moments transform into timeless memories. Based in the vibrant heart of Accra, Ghana, we are a creative photography service dedicated to capturing the essence of life&apos;s most precious occasions.
              </p>
              <p>
                Our passion lies in telling your unique story through the lens. Whether it&apos;s the intimate beauty of a portrait, the joyous celebration of a wedding, the excitement of a birthday, the pride of graduation, or the elegance of fashion, we bring artistry and professionalism to every shoot.
              </p>
              <p>
                With years of experience and a keen eye for detail, we specialize in creating stunning visual narratives that you&apos;ll cherish forever. At YOUNGKONCEPT, we don&apos;t just take photos—we capture the emotions, the connections, and the moments that matter most to you.
              </p>
              <p className="text-gold-400 font-semibold italic">
                Let us help you preserve your most beautiful moments with elegance and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
