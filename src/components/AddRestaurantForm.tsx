"use client";
import React, { useState } from "react";

interface FormData {
  restaurant_name: string;
  image: File | null;
  logo: File | null;
  opening_time: string;
  closing_time: string;
  restaurant_owner: string;
  //manager_id: string;
}

const AddRestaurantForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    restaurant_name: "",
    image: null,
    logo: null,
    opening_time: "",
    closing_time: "",
    restaurant_owner: "",
   // manager_id: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file uploads
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        // Save Base64 string to localStorage
        localStorage.setItem(name, reader.result as string);
        console.log(`${name} stored in localStorage`);
      };

      reader.readAsDataURL(file);

      // Update form data with the file
      setFormData((prev) => ({ ...prev, [name]: file }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    alert("Restaurant data has been saved to local storage!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Add New Restaurant</h2>

      {/* Restaurant Name */}
      <div>
        <label htmlFor="restaurant_name" className="block text-gray-700 mb-1">
          Restaurant Name
        </label>
        <input
          type="text"
          id="restaurant_name"
          name="restaurant_name"
          placeholder="Enter restaurant name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label htmlFor="image" className="block text-gray-700 mb-1">
          Restaurant Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2"
        />
      </div>

      {/* Logo Upload */}
      <div>
        <label htmlFor="logo" className="block text-gray-700 mb-1">
          Restaurant Logo
        </label>
        <input
          type="file"
          id="logo"
          name="logo"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2"
        />
      </div>

      {/* Opening Time */}
      <div>
        <label htmlFor="opening_time" className="block text-gray-700 mb-1">
          Opening Time
        </label>
        <input
          type="time"
          id="opening_time"
          name="opening_time"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Closing Time */}
      <div>
        <label htmlFor="closing_time" className="block text-gray-700 mb-1">
          Closing Time
        </label>
        <input
          type="time"
          id="closing_time"
          name="closing_time"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Restaurant Owner */}
      <div>
        <label htmlFor="restaurant_owner" className="block text-gray-700 mb-1">
          Restaurant Owner
        </label>
        <input
          type="text"
          id="restaurant_owner"
          name="restaurant_owner"
          placeholder="Enter owner's name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Manager ID */}
      <div>
        <label htmlFor="manager_id" className="block text-gray-700 mb-1">
          Manager ID
        </label>
        <input
          type="text"
          id="manager_id"
          name="manager_id"
          placeholder="Enter manager ID"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default AddRestaurantForm;
