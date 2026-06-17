import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function ContactPage() {
  return (
    <main className="bg-background-50 min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-background-100">
        <div className="w-full px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="text-xs text-accent-500 uppercase tracking-widest font-label font-semibold">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground-950 mt-3 mb-4 leading-tight">
              Contact Us
            </h1>
            <p className="text-foreground-600 text-lg leading-relaxed max-w-lg">
              We would love to hear from you. Whether you have questions about
              an item, want to visit us, or just want to say hello — reach out
              anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="w-full px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="https://zalo.me/0901234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background-100 rounded-2xl p-6 text-center border border-background-200/70 hover:border-primary-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                <i className="ri-chat-3-line text-2xl text-primary-600 group-hover:text-background-50 transition-colors"></i>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground-900 mb-2">
                Zalo
              </h3>
              <p className="text-foreground-500 text-sm">
                Chat with us on Zalo for quick responses and inquiries.
              </p>
              <span className="inline-block mt-4 text-primary-600 text-sm font-semibold group-hover:text-primary-700 transition-colors">
                090 123 4567
              </span>
            </a>

            <a
              href="https://m.me/khuvuon2hand"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background-100 rounded-2xl p-6 text-center border border-background-200/70 hover:border-accent-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors">
                <i className="ri-messenger-line text-2xl text-accent-600 group-hover:text-background-50 transition-colors"></i>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground-900 mb-2">
                Messenger
              </h3>
              <p className="text-foreground-500 text-sm">
                Message us on Facebook Messenger anytime.
              </p>
              <span className="inline-block mt-4 text-accent-600 text-sm font-semibold group-hover:text-accent-700 transition-colors">
                @khuvuon2hand
              </span>
            </a>

            <a
              href="mailto:khuvuon2hand@gmail.com"
              className="bg-background-100 rounded-2xl p-6 text-center border border-background-200/70 hover:border-primary-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                <i className="ri-mail-line text-2xl text-primary-600 group-hover:text-background-50 transition-colors"></i>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground-900 mb-2">
                Email
              </h3>
              <p className="text-foreground-500 text-sm">
                Send us an email and we will get back within 24 hours.
              </p>
              <span className="inline-block mt-4 text-primary-600 text-sm font-semibold group-hover:text-primary-700 transition-colors">
                khuvuon2hand@gmail.com
              </span>
            </a>

            <a
              href="tel:+84901234567"
              className="bg-background-100 rounded-2xl p-6 text-center border border-background-200/70 hover:border-accent-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors">
                <i className="ri-phone-line text-2xl text-accent-600 group-hover:text-background-50 transition-colors"></i>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground-900 mb-2">
                Phone
              </h3>
              <p className="text-foreground-500 text-sm">
                Call us during business hours for immediate assistance.
              </p>
              <span className="inline-block mt-4 text-accent-600 text-sm font-semibold group-hover:text-accent-700 transition-colors">
                090 123 4567
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background-100">
        <div className="w-full px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-950 mb-3 leading-tight">
                Visit Our Store
              </h2>
              <p className="text-foreground-500 text-base">
                Come browse our collection in person at our garden-inspired
                space.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="w-full lg:w-5/12">
                <div className="bg-background-50 rounded-2xl p-6 md:p-8 border border-background-200/70">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-primary-600"></i>
                    </div>
                    <div>
                      <h3 className="font-label font-semibold text-foreground-900 text-sm mb-1">
                        Address
                      </h3>
                      <p className="text-foreground-600 text-sm leading-relaxed">
                        123 Nguyen Trai Street, District 1<br />
                        Ho Chi Minh City, Vietnam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-accent-600"></i>
                    </div>
                    <div>
                      <h3 className="font-label font-semibold text-foreground-900 text-sm mb-1">
                        Business Hours
                      </h3>
                      <div className="text-foreground-600 text-sm leading-relaxed space-y-1">
                        <p>Monday — Friday: 9:00 — 19:00</p>
                        <p>Saturday: 9:00 — 17:00</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <i className="ri-motorbike-line text-primary-600"></i>
                    </div>
                    <div>
                      <h3 className="font-label font-semibold text-foreground-900 text-sm mb-1">
                        Parking
                      </h3>
                      <p className="text-foreground-600 text-sm leading-relaxed">
                        Free motorbike parking available. Car parking at nearby
                        lots.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-7/12">
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-background-200/70">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4544695626887!2d106.6933167147492!3d10.776648092322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491b2d5d1c24!2sNguyen%20Trai%2C%20District%201%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1686000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Khu Vuon 2Hand Nha MC Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="w-full px-6 md:px-10">
          <div className="max-w-md mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-950 mb-3">
              Follow Us
            </h2>
            <p className="text-foreground-500 text-sm mb-6">
              Stay updated with new arrivals and behind-the-scenes moments.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://facebook.com/khuvuon2hand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background-100 flex items-center justify-center text-foreground-600 hover:bg-primary-500 hover:text-background-50 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="https://instagram.com/khuvuon2hand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background-100 flex items-center justify-center text-foreground-600 hover:bg-accent-500 hover:text-background-50 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="https://tiktok.com/@khuvuon2hand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background-100 flex items-center justify-center text-foreground-600 hover:bg-primary-500 hover:text-background-50 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-tiktok-fill text-xl"></i>
              </a>
              <a
                href="https://zalo.me/0901234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background-100 flex items-center justify-center text-foreground-600 hover:bg-accent-500 hover:text-background-50 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-chat-3-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">Customer Information</h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              alert("SUBMIT CLICKED");

              const form = e.target as HTMLFormElement;

              const customer = {
                FullName: (
                  form.elements.namedItem("FullName") as HTMLInputElement
                ).value,
                Email: (form.elements.namedItem("Email") as HTMLInputElement)
                  .value,
                PhoneNumber: (
                  form.elements.namedItem("PhoneNumber") as HTMLInputElement
                ).value,
                Address: (
                  form.elements.namedItem("Address") as HTMLInputElement
                ).value,
              };

              const response = await fetch(
                "http://localhost:3000/api/customers",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(customer),
                },
              );

              const data = await response.json();
              alert(data.message);
            }}
          >
            <input
              type="text"
              name="FullName"
              placeholder="Full Name"
              className="w-full border p-3 mb-3 rounded"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full border p-3 mb-3 rounded"
            />

            <input
              type="text"
              name="PhoneNumber"
              placeholder="Phone Number"
              className="w-full border p-3 mb-3 rounded"
            />

            <input
              type="text"
              name="Address"
              placeholder="Address"
              className="w-full border p-3 mb-3 rounded"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
