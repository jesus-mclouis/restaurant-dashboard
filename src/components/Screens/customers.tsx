// pages/customers.tsx
"use client";

import React, { useState } from "react";
import PageLayout from "./layout"; // Importing PageLayout for consistent layout

interface Customer {
  id: number;
  name: string;
  totalOrders: number;
  lastOrderDate: string;
}

// Mock customer data for pagination (20 customers, 10 per page)
const initialCustomers: Customer[] = [
  { id: 1, name: "John Doe", totalOrders: 15, lastOrderDate: "2024-10-01" },
  { id: 2, name: "Jane Smith", totalOrders: 8, lastOrderDate: "2024-09-15" },
  { id: 3, name: "Samuel Adams", totalOrders: 12, lastOrderDate: "2024-10-05" },
  { id: 4, name: "Alice Johnson", totalOrders: 20, lastOrderDate: "2024-09-30" },
  { id: 5, name: "Bob Marley", totalOrders: 7, lastOrderDate: "2024-08-22" },
  { id: 6, name: "Jessica Brown", totalOrders: 18, lastOrderDate: "2024-09-25" },
  { id: 7, name: "Michael Carter", totalOrders: 5, lastOrderDate: "2024-07-12" },
  { id: 8, name: "Nancy Davis", totalOrders: 10, lastOrderDate: "2024-09-10" },
  { id: 9, name: "Peter Johnson", totalOrders: 9, lastOrderDate: "2024-08-28" },
  { id: 10, name: "Linda White", totalOrders: 13, lastOrderDate: "2024-10-03" },
  { id: 11, name: "George Harrison", totalOrders: 14, lastOrderDate: "2024-10-02" },
  { id: 12, name: "Elvis Presley", totalOrders: 17, lastOrderDate: "2024-09-15" },
  { id: 13, name: "Paul McCartney", totalOrders: 11, lastOrderDate: "2024-09-12" },
  { id: 14, name: "Ringo Starr", totalOrders: 6, lastOrderDate: "2024-08-18" },
  { id: 15, name: "Mick Jagger", totalOrders: 9, lastOrderDate: "2024-09-05" },
  { id: 16, name: "Keith Richards", totalOrders: 20, lastOrderDate: "2024-10-01" },
  { id: 17, name: "Freddie Mercury", totalOrders: 12, lastOrderDate: "2024-09-20" },
  { id: 18, name: "David Bowie", totalOrders: 8, lastOrderDate: "2024-09-25" },
  { id: 19, name: "Jim Morrison", totalOrders: 10, lastOrderDate: "2024-10-05" },
  { id: 20, name: "Jimi Hendrix", totalOrders: 7, lastOrderDate: "2024-09-30" },
];

// Load customers data (mocking database data for now)
const getCustomersData = (): Customer[] => initialCustomers;

const CustomersPage: React.FC = () => {
  // Directly use the initial data, no need to load from localStorage
  const [customers] = useState<Customer[]>(getCustomersData());
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10); // Display 10 customers per page

  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Filter customers based on search term
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current customers based on pagination
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <PageLayout>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Customers List</h3>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Total Orders</th>
              <th className="px-4 py-2">Last Order Date</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id} className="group hover:bg-gray-100">
                <td className="border px-4 py-2">{customer.id}</td>
                <td className="border px-4 py-2">{customer.name}</td>
                <td className="border px-4 py-2">{customer.totalOrders}</td>
                <td className="border px-4 py-2">{customer.lastOrderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {[...Array(Math.ceil(filteredCustomers.length / customersPerPage)).keys()].map((num) => (
            <button
              key={num + 1}
              onClick={() => paginate(num + 1)}
              className={`px-3 py-1 mx-1 ${currentPage === num + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default CustomersPage;
