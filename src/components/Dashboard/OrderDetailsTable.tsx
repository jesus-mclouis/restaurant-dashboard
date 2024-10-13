import React from "react";

const orderDetailsInfo = [
  {
    rank: 1,
    name: "Fufu and Eru Meat Combo",
    category: "Main Course",
    price: "XAF2500",
    sold: 35,
    pending: 12,
  },
  {
    rank: 2,
    name: "Rice and Meat Balls Sauce",
    category: "Desert",
    price: "XAF5000",
    sold: 30,
    pending: 12,
  },
  {
    rank: 3,
    name: "Rice and Chicken",
    category: "Main Course",
    price: "XAF1500",
    sold: 20,
    pending: 12,
  },
  {
    rank: 4,
    name: "Ndole and Plantain",
    category: "Main Course",
    price: "XAF1500",
    sold: 40,
    pending: 12,
  },
];

const OrderDetailsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Popular Menu Dishes</h3>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Sold</th>
            <th className="px-4 py-2">Pending</th>
          </tr>
        </thead>
        <tbody>
          {orderDetailsInfo.map((dish) => (
            <tr key={dish.rank}>
              <td className="border px-4 py-2">{dish.rank}</td>
              <td className="border px-4 py-2">{dish.name}</td>
              <td className="border px-4 py-2">{dish.category}</td>
              <td className="border px-4 py-2">{dish.price}</td>
              <td className="border px-4 py-2">{dish.sold}</td>
              <td className="border px-4 py-2">{dish.pending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailsTable;
