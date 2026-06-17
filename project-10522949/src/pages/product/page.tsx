import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function ProductDetailPage() {
  const imageMap: any = {
    "dam-body-do-real.jpg": "/dam-body-do-real.jpg",
    "dam-body-do-model.jpg": "/dam-body-do-model.jpg",

    "Dam-Xoe-Hong-Phan-Real.jpg": "/Dam-Xoe-Hong-Phan-Real.jpg",
    "Dam-Xoe-Hong-Phan-Model.jpg": "/Dam-Xoe-Hong-Phan-Model.jpg",

    "Bo-Vay-Cong-So-Hong-Soc-Real.jpg": "/Bo-Vay-Cong-So-Hong-Soc-Real.jpg",
    "Bo-Vay-Cong-So-Hong-Soc-Model.jpg": "/Bo-Vay-Cong-So-Hong-Soc-Model.jpg",

    "Dam-Body-Do-Ho-Lung-Real.jpg": "/Dam-Body-Do-Ho-Lung-Real.jpg",
    "Dam-Body-Do-Ho-Lung-Model.jpg": "/Dam-Body-Do-Ho-Lung-Model.jpg",

    "Dam-Trang-Xep-Tang-Real.jpg": "/Dam-Trang-Xep-Tang-Real.jpg",
    "Dam-Trang-Xep-Tang-Model.jpg": "/Dam-Trang-Xep-Tang-Model.jpg",

    "Dam-Hoa-Hong-Trang-Model.jpg": "/Dam-Hoa-Hong-Trang-Model.jpg",
    "Dam-Hoa-Hong-Trang-Real.jpg": "/Dam-Hoa-Hong-Trang-Real.jpg",

    "Dam-Ren-Trang-Model.jpg": "/Dam-Ren-Trang-Model.jpg",
    "Dam-Ren-Trang-Real.jpg": "/Dam-Ren-Trang-Real.jpg",

    "Dam-Hong-Body-Real.jpg": "/Dam-Hong-Body-Real.jpg",
    "Dam-Hong-Body-Model-Front.jpg": "/Dam-Hong-Body-Model-Front.jpg",

    "Quan-Tay-Nau-Model.jpg": "/Quan-Tay-Nau-Model.jpg",
    "Quan-Tay-Nau-Real.jpg": "/Quan-Tay-Nau-Real.jpg",

    "Dam-Hoa-Nhi-Tay-Phong-Real.jpg": "/Dam-Hoa-Nhi-Tay-Phong-Real.jpg",
    "Dam-Hoa-Nhi-Tay-Phong-Model.jpg": "/Dam-Hoa-Nhi-Tay-Phong-Model.jpg",

    "Dam-Xep-Ly-No-Co-Real.jpg": "/Dam-Xep-Ly-No-Co-Real.jpg",
    "Dam-Xep-Ly-No-Co-Model.jpg": "/Dam-Xep-Ly-No-Co-Model.jpg",

    "Jumpsuit-Kem-Cong-So-Real.jpg": "/Jumpsuit-Kem-Cong-So-Real.jpg",
    "Jumpsuit-Kem-Cong-So-Model.jpg": "/Jumpsuit-Kem-Cong-So-Model.jpg",

    "Dam-Den-Om-Dang-Real.jpg": "/Dam-Den-Om-Dang-Real.jpg",
    "Dam-Den-Om-Dang-Model.jpg": "/Dam-Den-Om-Dang-Model.jpg",

    "Dam-Dai-Tay-Hong-Phan-Real.jpg": "/Dam-Dai-Tay-Hong-Phan-Real.jpg",
    "Dam-Dai-Tay-Hong-Phan-Model.jpg": "/Dam-Dai-Tay-Hong-Phan-Model.jpg",
  };
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("VNPay");
  useEffect(() => {
    fetch(`http://localhost:5000/api/plants/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);
  const handleBuyNow = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buyerId: 5,
          plantId: product.PlantID,
          quantity: 1,
          shippingAddress: "Ho Chi Minh City",
          paymentMethod,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Đặt hàng thành công!");
        setShowPayment(false);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối server");
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1>Loading...</h1>
      </main>
    );
  }

  if (!product) {
    return (
      <main>
        <h1>Product not found</h1>
      </main>
    );
  }

  console.log("PlantName =", product.PlantName);
  console.log("Image =", product.ImageUrl);

  return (
    <main className="bg-background-50 min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="w-full px-6 md:px-10">
          <div className="flex items-center gap-2 text-sm text-foreground-500 mb-8">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>{product.PlantName}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={`/${product.ImageUrl}`}
                  alt="Ảnh thật"
                  className="w-full rounded-xl"
                />

                <img
                  src={`/${product.ImageUrl2}`}
                  alt="Ảnh mẫu"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                  Plants
                </span>

                <span className="bg-accent-100 text-accent-700 text-xs px-3 py-1 rounded-full">
                  {product.Condition}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{product.PlantName}</h1>

              <p className="text-3xl font-bold text-orange-600 mb-6">
                {formatPrice(product.Price)}
              </p>

              <div className="border-b mb-6"></div>

              <h3 className="text-xl font-semibold mb-3">Description</h3>

              <p className="text-gray-600 mb-8">{product.Description}</p>

              <div className="bg-gray-100 rounded-xl p-4">
                <p>
                  <strong>Status:</strong> {product.Status}
                </p>

                <p>
                  <strong>Plant ID:</strong> {product.PlantID}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowPayment(true)}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                >
                  Buy Now
                </button>

                <button
                  onClick={() => alert("Added to cart!")}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
                >
                  Add to Cart
                </button>

                <Link
                  to="/products"
                  className="bg-gray-500 text-white px-5 py-3 rounded-lg"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {showPayment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-[420px] shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-2">Checkout</h2>

            <p className="text-center text-gray-500 mb-6">
              Chọn phương thức thanh toán
            </p>

            <div className="space-y-3">
              <button
                onClick={() => setPaymentMethod("VNPay")}
                className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition
            ${
              paymentMethod === "VNPay"
                ? "border-green-500 bg-green-50"
                : "border-gray-200"
            }`}
              >
                <span className="font-semibold">💳 VNPay</span>

                {paymentMethod === "VNPay" && <span>✔</span>}
              </button>

              <button
                onClick={() => setPaymentMethod("COD")}
                className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition
            ${
              paymentMethod === "COD"
                ? "border-orange-500 bg-orange-50"
                : "border-gray-200"
            }`}
              >
                <span className="font-semibold">
                  🚚 Nhận hàng rồi thanh toán
                </span>

                {paymentMethod === "COD" && <span>✔</span>}
              </button>
              <button
                onClick={() => setPaymentMethod("BANK")}
                className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition
    ${
      paymentMethod === "BANK"
        ? "border-blue-500 bg-blue-50"
        : "border-gray-200"
    }`}
              >
                <span className="font-semibold">🏦 Chuyển khoản ngân hàng</span>

                {paymentMethod === "BANK" && <span>✔</span>}
              </button>
              {paymentMethod === "BANK" && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl text-center">
                  <img
                    src="/OCB-Bank.png"
                    alt="QR Thanh Toán"
                    className="w-56 mx-auto mb-3 rounded-lg shadow"
                  />

                  <p>
                    <strong>Ngân hàng:</strong> OCB
                  </p>
                  <p>
                    <strong>Số tài khoản:</strong> 0344880475
                  </p>
                  <p>
                    <strong>Chủ tài khoản:</strong> KHU VUON 2-HAND
                  </p>
                </div>
              )}
              <button
                onClick={handleBuyNow}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
              >
                Xác nhận thanh toán
              </button>
            </div>
            <button
              onClick={() => setShowPayment(false)}
              className="w-full mt-3 py-3 rounded-xl border"
            >
              Hủy
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
