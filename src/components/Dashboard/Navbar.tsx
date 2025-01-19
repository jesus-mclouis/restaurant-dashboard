"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiSun, FiBell } from "react-icons/fi";
import Image from "next/image";

interface NavbarProps {
  userName: string;
  profileImage: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName, profileImage }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Toggle profile dropdown menu
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  // Open/close edit restaurant modal
  const toggleEditModal = () => {
    setIsEditModalOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout Functionality
  const handleLogOut = () => {
    alert("Logout successful");
    window.location.href = "/";
  };

  return (
    <header className="relative flex justify-between items-center p-4 shadow-md bg-white">
      {/* Search Bar */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search or type a command"
          className="px-4 py-2 border rounded-full w-80 focus:outline-none"
        />
      </div>

      {/* Icons and Profile Section */}
      <div className="flex items-center space-x-6">
        <FiSun className="text-xl cursor-pointer" />
        <FiBell className="text-xl cursor-pointer" />

        {/* Profile Section */}
        <div ref={profileRef} className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleProfileMenu}
          >
            <Image
              src={profileImage || "/images/profile.svg"}
              alt="User Avatar"
              width={48}
              height={48}
              className="rounded-full border-2 border-gray-300"
            />
            <span className="font-medium">{userName || "User"}</span>
          </div>

          {/* Profile Dropdown Menu */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
              <div className="px-4 py-3 border-b">
                <p className="font-medium">{userName}</p>
                <p className="text-sm text-gray-500">user@example.com</p>
              </div>
              <ul className="py-2">
                <li
                  onClick={toggleEditModal}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-500 font-medium"
                >
                  Edit Restaurant
                </li>
                <li
                  onClick={handleLogOut}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500 font-medium"
                >
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Edit Restaurant Modal */}
      {isEditModalOpen && <EditRestaurantForm onClose={toggleEditModal} />}
    </header>
  );
};

export default Navbar;

// Edit Restaurant Form Component
interface EditRestaurantFormProps {
  onClose: () => void;
}

const EditRestaurantForm: React.FC<EditRestaurantFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    restaurant_name: "Current Restaurant Name",
    image: null,
    logo: null,
    opening_time: "",
    closing_time: "",
    restaurant_owner: "Restaurant Owner",
    restaurant_id: "",
    manager_id: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleDelete = () => {
    alert("Restaurant deleted successfully!");
    // Implement delete functionality here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Restaurant Data:", formData);
    alert("Restaurant updated successfully!");
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[50%] p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>

        {/* Form */}
        <h2 className="text-2xl font-bold mb-4">Edit Restaurant</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="restaurant_name"
            placeholder="Restaurant Name"
            value={formData.restaurant_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          <input
            type="text"
            name="restaurant_id"
            placeholder="Restaurant ID"
            value={formData.restaurant_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="manager_id"
            placeholder="Manager ID"
            value={formData.manager_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete Restaurant
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
