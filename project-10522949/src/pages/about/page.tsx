import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const values = [
  {
    icon: 'ri-heart-line',
    title: 'Sustainability',
    description: 'We believe fashion should never cost the earth. Every item we sell extends the life of a beautiful piece, reducing waste and promoting conscious consumption.',
  },
  {
    icon: 'ri-star-line',
    title: 'Quality First',
    description: 'Every item in our collection is carefully hand-picked. We inspect each piece thoroughly to ensure it meets our standards of quality and wearability.',
  },
  {
    icon: 'ri-community-line',
    title: 'Community',
    description: 'More than a store, we\'re building a community of like-minded individuals who appreciate the beauty of pre-loved treasures and sustainable living.',
  },
  {
    icon: 'ri-leaf-line',
    title: 'Natural Beauty',
    description: 'Our garden-inspired space is designed to make shopping a peaceful, restorative experience. We believe the environment should be as beautiful as the items we sell.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background-50 min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-background-100">
        <div className="w-full px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="text-xs text-accent-500 uppercase tracking-widest font-label font-semibold">Our Story</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground-950 mt-3 mb-6 leading-tight">
              About Khu Vuon<br />2Hand Nha MC
            </h1>
            <p className="text-foreground-600 text-lg leading-relaxed">
              A garden of pre-loved treasures where every item carries a story, and every purchase plants a seed for a more sustainable future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="w-full px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20cozy%20charming%20second-hand%20store%20interior%20with%20warm%20lighting%2C%20wooden%20shelves%20filled%20with%20neatly%20folded%20vintage%20clothing%20in%20soft%20natural%20colors%2C%20hanging%20plants%20cascading%20from%20ceiling%20beams%2C%20a%20friendly%20store%20owner%20arranging%20items%2C%20terracotta%20pots%20with%20greenery%2C%20rustic%20wooden%20floor%2C%20afternoon%20sunlight%20streaming%20through%20windows%2C%20inviting%20warm%20atmosphere&width=800&height=1000&seq=about-store-1&orientation=portrait"
                  alt="Store interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-950 leading-tight mb-6">
                How It All<br />
                <span className="italic text-primary-600">Began</span>
              </h2>
              <p className="text-foreground-600 text-base leading-relaxed mb-5">
                Khu Vuon 2Hand Nha MC started with a simple idea in 2020: what if second-hand shopping could feel like
                strolling through a beautiful garden? Our founder, MC, had always been passionate about vintage fashion
                and sustainable living. After years of collecting unique pieces from markets and travels, she decided to
                create a space where these treasures could find new homes.
              </p>
              <p className="text-foreground-600 text-base leading-relaxed mb-5">
                The name "Khu Vuon" — meaning "The Garden" in Vietnamese — reflects our philosophy. Just as a garden
                nurtures growth and beauty, we nurture the cycle of pre-loved items, giving them new life and purpose.
                Every piece in our collection has been carefully curated, cleaned, and prepared with the same care a
                gardener gives to their plants.
              </p>
              <p className="text-foreground-600 text-base leading-relaxed">
                Today, we serve hundreds of customers who share our love for unique, affordable, and sustainable fashion.
                From vintage dresses to handcrafted home decor, each item in our garden tells a story — and we can't wait
                for you to be part of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background-100">
        <div className="w-full px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="text-xs text-accent-500 uppercase tracking-widest font-label font-semibold">Our Values</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-950 mt-3 leading-tight">
              What We<br />
              <span className="italic text-primary-600">Believe In</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-background-50 rounded-2xl p-6 md:p-8 border border-background-200/70">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-5">
                  <i className={`${v.icon} text-xl text-primary-600`}></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground-900 mb-3">{v.title}</h3>
                <p className="text-foreground-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="w-full px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-950 mb-6 leading-tight">
              Ready to Explore<br />
              <span className="italic text-primary-600">Our Garden</span>?
            </h2>
            <p className="text-foreground-600 text-base mb-8 leading-relaxed">
              Every visit brings new discoveries. Our collection changes weekly with fresh arrivals, so there's always something new to find.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent-500 text-background-50 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-accent-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Browse Collection
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}