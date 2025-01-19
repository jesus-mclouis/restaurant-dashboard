"use client";
import React, { useState } from "react";

interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
  restaurant_id: string;
  password: string;
  profile_image: File | null;
}

const AddManagerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    phone_number: "",
    restaurant_id: "",
    password: "",
    profile_image: null,
  });

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input changes (profile image)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        // Save image as Base64 in localStorage for demonstration purposes
        localStorage.setItem(name, reader.result as string);
        console.log(`${name} stored in localStorage`);
      };

      reader.readAsDataURL(file);

      // Update state
      setFormData((prev) => ({ ...prev, [name]: file }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Log the form data
    console.log("Manager Details Submitted:", formData);

    alert("Manager data has been saved to local storage!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Add New Manager</h2>

      {/* Full Name */}
      <div>
        <label htmlFor="full_name" className="block text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter manager's full name"
          value={formData.full_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter manager's email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone_number" className="block text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          placeholder="Enter manager's phone number"
          value={formData.phone_number}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Restaurant ID */}
      <div>
        <label htmlFor="restaurant_id" className="block text-gray-700 mb-1">
          Restaurant ID
        </label>
        <input
          type="text"
          id="restaurant_id"
          name="restaurant_id"
          placeholder="Enter the associated restaurant ID"
          value={formData.restaurant_id}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password for the manager"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Profile Image */}
      <div>
        <label htmlFor="profile_image" className="block text-gray-700 mb-1">
          Profile Image
        </label>
        <input
          type="file"
          id="profile_image"
          name="profile_image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Add Manager
      </button>
    </form>
  );
};

export default AddManagerForm;
