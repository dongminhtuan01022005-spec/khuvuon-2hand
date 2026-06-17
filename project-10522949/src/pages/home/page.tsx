import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ProductCard from "@/components/base/ProductCard";

function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <img
        src="/Nền.jpg"
        alt="Khu Vuon 2Hand"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/35"></div>

      <div className="relative z-10 w-full px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="mb-8">
            <span className="font-heading text-2xl md:text-3xl text-background-50 italic">
              Khu Vườn 2Hand Nhà MC
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-background-50 leading-tight mb-6">
            <br />
            <span className="italic text-accent-300">Tuyển Chọn</span>
            <br />
            Cho Bạn
          </h1>

          <p className="text-background-200 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
            A garden of gently-loved pieces waiting for their next chapter.
            Sustainable style with soul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-accent-500 text-background-50 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-accent-600 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
            >
              Explore Collection
            </Link>
            <Link
              to="/about"
              className="border-2 border-background-50/40 text-background-50 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-background-50/10 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-background-50/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-background-50/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setProducts(data.data.slice(0, 4));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10">
        <div className="mb-14">
          <span className="text-xs text-accent-500 uppercase tracking-widest font-label font-semibold">
            Curated Picks
          </span>

          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground-950 mt-3 leading-tight">
            Featured
            <br />
            Tuyển Chọn
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.PlantID}
              id={String(product.PlantID)}
              name={product.PlantName}
              price={product.Price}
              image={`/${product.ImageUrl2 || product.ImageUrl}`}
              category={
                product.CategoryID === 5
                  ? "Plants"
                  : product.CategoryID === 1
                    ? "Fashion"
                    : product.CategoryID === 4
                      ? "Furniture"
                      : "Other"
              }
              condition={product.Condition}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
          >
            View All Products
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
function StoreIntro() {
  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <span className="inline-block px-4 py-1.5 border border-accent-300/40 rounded-full text-xs text-accent-600 font-label uppercase tracking-wider mb-6">
                Our Garden
              </span>
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20cozy%20vintage-inspired%20second-hand%20store%20interior%20with%20warm%20wooden%20shelves%20filled%20with%20curated%20clothing%20and%20home%20decor%2C%20hanging%20plants%20cascading%20from%20above%2C%20soft%20warm%20lighting%20from%20vintage%20pendant%20lamps%2C%20terracotta%20pots%20with%20lush%20greenery%2C%20rustic%20wooden%20floor%2C%20inviting%20and%20charming%20atmosphere%20with%20garden-inspired%20decor&width=800&height=1000&seq=store-intro-1&orientation=portrait"
                  alt="Store interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground-950 leading-tight mb-6">
              Where Every
              <br />
              Piece Has a<br />
              <span className="italic text-primary-600">Story to Tell</span>
            </h2>
            <p className="text-foreground-600 text-base leading-relaxed mb-6 max-w-xl">
              Khu Vuon 2Hand Nha MC was born from a simple belief: beautiful
              things deserve a second life. We carefully curate Đồ 2Hand
              fashion, accessories, and home decor, bringing them into our
              garden-inspired space where they can find new owners who will
              cherish them just as much.
            </p>
            <p className="text-foreground-600 text-base leading-relaxed mb-8 max-w-xl">
              Every item in our collection has been hand-selected for its
              quality, character, and timeless appeal. We believe sustainable
              shopping should be a joy &mdash; not a compromise.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary-600 text-background-50 px-7 py-3 rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Learn More About Us
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "I found the most beautiful vintage dress here. The quality is amazing and the prices are so reasonable. It's my go-to place for unique finds now!",
      name: "Minh Anh",
      role: "Regular Customer",
      image:
        "https://readdy.ai/api/search-image?query=A%20young%20Vietnamese%20woman%20with%20a%20warm%20genuine%20smile%20wearing%20a%20simple%20cream%20blouse%2C%20standing%20in%20a%20garden%20with%20soft%20green%20foliage%20background%2C%20natural%20daylight%2C%20portrait%20photography%20with%20shallow%20depth%20of%20field%2C%20friendly%20and%20approachable%20vibe&width=600&height=750&seq=testimonial-1&orientation=portrait",
    },
    {
      quote:
        "The garden atmosphere makes shopping here such a peaceful experience. I love that every item feels carefully chosen. You can tell they really care.",
      name: "Thao Nguyen",
      role: "Loyal Customer",
      image:
        "https://readdy.ai/api/search-image?query=A%20Vietnamese%20woman%20in%20her%20late%20twenties%20with%20a%20warm%20expression%2C%20wearing%20a%20beige%20linen%20shirt%2C%20sitting%20on%20a%20wooden%20bench%20surrounded%20by%20potted%20plants%2C%20soft%20afternoon%20light%2C%20portrait%20photography%20with%20natural%20bokeh%20background&width=600&height=750&seq=testimonial-2&orientation=portrait",
    },
    {
      quote:
        "I'm obsessed with the ceramic collection I bought here. Such unique pieces at great prices. The staff is so friendly and helpful too!",
      name: "Lan Huong",
      role: "New Customer",
      image:
        "https://readdy.ai/api/search-image?query=A%20Vietnamese%20woman%20with%20a%20bright%20smile%2C%20wearing%20a%20soft%20terracotta%20colored%20top%2C%20posing%20in%20front%20of%20a%20sunlit%20window%20with%20hanging%20plants%2C%20warm%20natural%20lighting%2C%20portrait%20photography%20with%20soft%20dreamy%20atmosphere&width=600&height=750&seq=testimonial-3&orientation=portrait",
    },
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  const t = testimonials[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-5/12">
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <span className="text-xs text-accent-500 uppercase tracking-widest font-label font-semibold">
              ( Testimonials )
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground-950 mt-6 mb-12 leading-tight">
              Loved by
              <br />
              <span className="text-foreground-400 font-normal">
                Our Community
              </span>
            </h2>

            <blockquote className="text-foreground-600 text-lg leading-relaxed mb-8 pl-6 border-l-2 border-accent-300">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <p className="text-foreground-900 font-semibold text-base">
              &mdash; {t.name},{" "}
              <span className="text-foreground-500 font-normal">{t.role}</span>
            </p>

            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-foreground-200 flex items-center justify-center text-foreground-500 hover:border-foreground-400 hover:text-foreground-700 transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-foreground-900 flex items-center justify-center text-background-50 hover:bg-foreground-800 transition-colors cursor-pointer"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
              <span className="text-foreground-400 text-sm ml-3">
                {activeIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-12">
            <img
              src="https://readdy.ai/api/search-image?query=A%20beautiful%20flat%20lay%20arrangement%20of%20vintage%20garden%20tools%2C%20dried%20flowers%2C%20a%20handwritten%20note%2C%20and%20soft%20linen%20fabric%20on%20a%20raw%20wooden%20table%2C%20warm%20natural%20light%20from%20a%20window%2C%20earthy%20beige%20and%20sage%20green%20color%20palette%2C%20artistic%20editorial%20still%20life%20photography%20with%20film%20grain%20texture&width=1200&height=514&seq=contact-cta-1&orientation=landscape"
              alt="Garden Tuyển Chọn"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-950 mb-4 leading-snug">
            Ready to Cho Bạn
            <br />
            <span className="italic text-primary-600">Next Treasure</span>?
          </h2>
          <p className="text-foreground-600 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Visit us in person or browse our latest arrivals online. New pieces
            added every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-foreground-900 text-background-50 px-10 py-3.5 rounded-full text-base font-semibold hover:bg-foreground-800 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
            >
              Browse Collection
            </Link>
            <Link
              to="/contact"
              className="border-2 border-foreground-200 text-foreground-800 px-10 py-3.5 rounded-full text-base font-semibold hover:border-foreground-400 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <FeaturedProducts />
      <StoreIntro />
      <Testimonial />
      <ContactCTA />
      <Footer />
    </main>
  );
}
