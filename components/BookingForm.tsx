"use client";

import { useState, FormEvent } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    sessionType: "",
    preferredDate: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      sessionType: "",
      preferredDate: "",
      message: ""
    });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello YOUNGKONCEPT! I'd like to book a photography session.\n\nName: ${formData.fullName || "N/A"}\nService Type: ${formData.sessionType || "N/A"}\nPreferred Date: ${formData.preferredDate || "N/A"}\n\nMessage: ${formData.message || "N/A"}`
    );
    window.open(`https://wa.me/233247852210?text=${message}`, "_blank");
  };

  return (
    <section id="booking" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-center text-text-body mb-8 max-w-2xl mx-auto">
          We will love to talk to you about your Photography, Branding, and Event Support Needs. We are directly reachable through WhatsApp and on call.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-lg mb-2 text-primary">Call Us</h3>
            <p className="text-text-body">+233 247 852 210</p>
            <p className="text-text-body">+233 508 316 156</p>
          </div>
          
          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-lg mb-2 text-primary">Email Us</h3>
            <p className="text-text-body break-all">youngkoncept@gmail.com</p>
          </div>
          
          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold text-lg mb-2 text-primary">Visit Us</h3>
            <p className="text-text-body text-sm">2nd Floor, Nungua Beach Road (Cold Store), Near Zion Prayer Ministry, Accra</p>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="+233 XX XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="sessionType" className="block text-sm font-medium mb-2">
                Service Required <span className="text-primary">*</span>
              </label>
              <select
                id="sessionType"
                required
                value={formData.sessionType}
                onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a service</option>
                <option value="Photography">Photography</option>
                <option value="Videography">Videography</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Social Media Strategy">Social Media Strategy</option>
                <option value="Digital Printing">Digital Printing</option>
                <option value="Large Format Print">Large Format Print</option>
                <option value="Branding">Branding</option>
                <option value="Event Coverage">Event Coverage</option>
                <option value="Other">Other - Please Specify</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                Preferred Date <span className="text-primary">*</span>
              </label>
              <input
                type="date"
                id="preferredDate"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Additional Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded-lg">
                ✓ Thank you! We&apos;ll contact you shortly to confirm your booking.
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-secondary hover:bg-primary disabled:bg-primary/50 text-black font-semibold py-4 rounded-lg transition-colors duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
