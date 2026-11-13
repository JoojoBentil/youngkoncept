const values = [
  {
    id: 1,
    title: "TARGET",
    question: "Are you reaching the right influencers or audience in the right place with your message?",
    icon: "🎯"
  },
  {
    id: 2,
    title: "ENGAGE",
    question: "Are you reaching your target audience on their channel of choice with multi-channel press release distribution, personalized email outreach, social campaigns, and more?",
    icon: "🤝"
  },
  {
    id: 3,
    title: "MEASURE",
    question: "Do you track your impact? Do you Listen, analyze, & benchmark your coverage across every channel (online, social, print and broadcast!) with unlimited searches & reports?",
    icon: "📊"
  },
  {
    id: 4,
    title: "INTEGRATE",
    question: "Do you validate the reach of your earned media coverage with complete audience insights and customer journey tracking - from impression to purchase or impact?",
    icon: "🔗"
  }
];

export default function Mission() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            What <span className="text-primary">Drives Us</span>
          </h2>
          <p className="text-text-body text-lg max-w-4xl mx-auto leading-relaxed">
            Our Mission is to <strong className="text-primary">immensely & sustainably energize the brands of clients</strong> to position them to lead their competition, maximize return on investments, and achieve their corporate vision.
          </p>
          <p className="text-text-body mt-4 text-lg italic">
            We are the guys who will fight to impress you and make you shine.
          </p>
        </div>

        <div className="mb-12 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">
            Our <span className="text-primary">4 Core Values</span>
          </h3>
          <p className="text-text-body">
            Before you decide if you should work with us, let us ask you 4 questions:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="bg-zinc-900 border-2 border-zinc-800 hover:border-primary rounded-lg p-8 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{value.icon}</div>
                <div>
                  <h4 className="font-bold text-2xl text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-text-body leading-relaxed">
                    {value.question}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
