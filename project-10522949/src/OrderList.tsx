import React from 'react';
export default function OrderList() {
  const orders = [
    { id: 1, date: '2026-06-06', customer: 'Lucius', email: 'lucius.tuan@gmail.com', product: 'Áo khoác Vintage Đen', price: '150,000đ' }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4 my-6">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">DANH SÁCH ĐƠN HÀNG HỆ THỐNG</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="px-4 py-2 text-left">Mã Đơn</th>
              <th className="px-4 py-2 text-left">Ngày Mua</th>
              <th className="px-4 py-2 text-left">Người Mua</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Sản Phẩm</th>
              <th className="px-4 py-2 text-left">Giá Tiền</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2 font-medium text-gray-900">{order.customer}</td>
                <td className="px-4 py-2 text-gray-600">{order.email}</td>
                <td className="px-4 py-2">{order.product}</td>
                <td className="px-4 py-2 text-green-600 font-semibold">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}