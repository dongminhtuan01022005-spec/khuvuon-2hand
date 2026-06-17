import { useState, useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ProductCard from "@/components/base/ProductCard";

const categories = ["All", "Plants", "Fashion", "Furniture"];
const conditions = ["All", "Like New", "Good", "Fair"];
const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low"];

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCondition, setActiveCondition] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE:", data);
        console.log(data);
        console.log(data.data);
        console.log(Array.isArray(data.data));
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setProducts([]);
      });
  }, []);

  let filtered = [...products];
  if (activeCategory !== "All") {
    filtered = filtered.filter((p) => {
      if (activeCategory === "Plants") {
        return p.CategoryID === 5;
      }

      if (activeCategory === "Fashion") {
        return p.CategoryID === 1;
      }

      if (activeCategory === "Furniture") {
        return p.CategoryID === 4;
      }

      return true;
    });
  }
  if (activeCondition !== "All") {
    filtered = filtered.filter((p) => p.Condition === activeCondition);
  }

  if (sortBy === "Price: Low to High") {
    filtered = [...filtered].sort((a, b) => a.Price - b.Price);
  } else if (sortBy === "Price: High to Low") {
    filtered = [...filtered].sort((a, b) => b.Price - a.Price);
  }

  return (
    <main className="bg-background-50 min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 md:pt-32 md:pb-12 bg-background-100">
        <div className="w-full px-6 md:px-10">
          <span className="text-xs text-accent-500 uppercase tracking-widest font-label font-semibold">
            Collection
          </span>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground-950 mt-3 leading-tight">
            All Products
          </h1>

          <p className="text-foreground-600 text-base mt-4 max-w-lg leading-relaxed">
            Browse our collection of second-hand products.
          </p>
        </div>
      </section>

      <section className="py-8 bg-background-50 border-b border-background-200/70 sticky top-[72px] z-30">
        <div className="w-full px-6 md:px-10">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary-500 text-white"
                      : "bg-background-100 text-foreground-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                {conditions.map((cond) => (
                  <button
                    key={cond}
                    onClick={() => setActiveCondition(cond)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      activeCondition === cond
                        ? "bg-accent-500 text-white"
                        : "bg-background-100 text-foreground-500"
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background-100 text-foreground-700 text-sm px-4 py-2 rounded-full border border-background-200"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="md:hidden bg-background-100 w-10 h-10 rounded-full"
              >
                <i className="ri-filter-3-line"></i>
              </button>
            </div>
          </div>

          {mobileFilterOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-3">
              {conditions.map((cond) => (
                <button
                  key={cond}
                  onClick={() => {
                    setActiveCondition(cond);
                    setMobileFilterOpen(false);
                  }}
                  className="text-left"
                >
                  {cond}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="w-full px-6 md:px-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => {
                console.log("IMAGE =", product.ImageUrl);

                return (
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
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2>No products found</h2>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
