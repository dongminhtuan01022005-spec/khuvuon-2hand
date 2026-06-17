import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  condition: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  condition,
}: ProductCardProps) {
  const formatPrice = (p: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(p);
  };

  return (
    <Link to={`/product/${id}`} className="group block cursor-pointer">
      <div className="bg-background-50 rounded-2xl overflow-hidden border border-background-200/70 transition-all duration-300 hover:border-primary-200">
        <div className="relative w-full h-[420px] overflow-hidden">
          <img
            src={image}
            alt={name}
            title={`${name} — Khu Vuon 2Hand`}
            className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-background-50/90 text-foreground-700 text-xs px-2.5 py-1 rounded-full font-label">
              {condition}
            </span>
          </div>
          <div className="absolute top-3 right-3 w-9 h-9 bg-background-50/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <i className="ri-heart-line text-foreground-700"></i>
          </div>
        </div>
        <div className="p-4">
          <span className="text-xs text-primary-600 font-label uppercase tracking-wide">
            {category}
          </span>
          <h3 className="font-heading text-base font-semibold text-foreground-900 mt-1 leading-snug line-clamp-1">
            {name}
          </h3>
          <p className="text-accent-500 font-bold text-lg mt-2 font-label">
            {formatPrice(price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
