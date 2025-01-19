import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa"; // For edit icon

interface MenuItem {
  rank: number;
  name: string;
  category: string;
  price: string;
  sold: number;
  pending: number;
  image: string; // Will store Base64 of the uploaded image
  description: string;
  availability: string[];
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Load menu data from localStorage
const getMenuData = (): MenuItem[] => {
  const savedData = localStorage.getItem("menuData");
  return savedData ? JSON.parse(savedData) : [];
};

const OrderDetailsTable: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(getMenuData());
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Form state for adding or editing an item
  const [newItem, setNewItem] = useState<MenuItem>({
    rank: menuItems.length + 1,
    name: "",
    category: "",
    price: "",
    sold: 0,
    pending: 0,
    image: "", // This will store the Base64 string of the uploaded image
    description: "",
    availability: [],
  });

  // Save menu to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("menuData", JSON.stringify(menuItems));
  }, [menuItems]);

  // Handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  // Handle availability days using checkboxes
  const handleCheckboxChange = (day: string) => {
    setNewItem((prev) => {
      const availability = prev.availability.includes(day)
        ? prev.availability.filter((d) => d !== day) // Uncheck - remove day
        : [...prev.availability, day]; // Check - add day
      return { ...prev, availability };
    });
  };

  // Handle image upload and convert it to Base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem((prev) => ({ ...prev, image: reader.result as string })); // Store Base64 string
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }
  };

  // Add or update item in the table
  const addItem = () => {
    if (newItem.name && newItem.category && newItem.price) {
      if (isEditing && editIndex !== null) {
        // Editing existing item
        const updatedItems = [...menuItems];
        updatedItems[editIndex] = { ...newItem, rank: editIndex + 1 };
        setMenuItems(updatedItems);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        // Adding new item
        setMenuItems([...menuItems, { ...newItem, rank: menuItems.length + 1 }]);
      }
      // Clear form
      setNewItem({
        rank: menuItems.length + 1,
        name: "",
        category: "",
        price: "",
        sold: 0,
        pending: 0,
        image: "",
        description: "",
        availability: [],
      });
    }
  };

  // Start editing an item
  const editItem = (index: number) => {
    setNewItem(menuItems[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Menu Dishes</h3>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Availability</th>
            <th className="px-4 py-2">Sold</th>
            <th className="px-4 py-2">Pending</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={item.rank} className="group hover:bg-gray-100">
              <td className="border px-4 py-2">{item.rank}</td>
              <td className="border px-4 py-2">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.availability.join(", ")}</td>
              <td className="border px-4 py-2">{item.sold}</td>
              <td className="border px-4 py-2">{item.pending}</td>
              <td className="border px-4 py-2 text-center">
                <button onClick={() => editItem(index)} className="text-blue-500 hidden group-hover:inline">
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-6">{isEditing ? "Edit Menu Item" : "Add New Menu Item"}</h3>
      <div className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Dish Name"
          value={newItem.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newItem.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />

        {/* Image Upload */}
        <div>
          <label className="block mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded"
          />
        </div>

        <textarea
          name="description"
          placeholder="Short Description"
          value={newItem.description}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />

        <label className="block">Availability (Days):</label>
        <div className="flex flex-wrap space-x-4">
          {daysOfWeek.map((day) => (
            <label key={day} className="flex items-center">
              <input
                type="checkbox"
                checked={newItem.availability.includes(day)}
                onChange={() => handleCheckboxChange(day)}
                className="mr-2"
              />
              {day}
            </label>
          ))}
        </div>

        <label htmlFor="sold" className="block">Sold</label>
        <input
          type="number"
          id="sold"
          name="sold"
          placeholder="Sold"
          value={newItem.sold}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <label htmlFor="pending" className="block">Pending</label>
        <input
          type="number"
          id="pending"
          name="pending"
          placeholder="Pending"
          value={newItem.pending}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isEditing ? "Update Item" : "Add Item"}
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsTable;
