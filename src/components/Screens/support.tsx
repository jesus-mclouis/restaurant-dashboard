"use client";

import React, { useState } from "react";
import PageLayout from "./layout";

// Define initial form state
const initialFormState = {
  name: "",
  phone: "",
  position: "",
  email: "",
  message: "",
};

const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState(initialFormState);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can process the form data here, such as sending it to an API
    console.log("Form Submitted: ", formData);
  };

  return (
    <PageLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center h-full bg-gray-100 p-6">
        {/* Left side with Image */}
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <img
            src="https://www.shutterstock.com/image-photo/african-american-team-working-call-600nw-2205887725.jpg" // You need to provide your own image or update this path
            alt="Support"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right side with Contact Form */}
        <div className="lg:w-1/2 w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Position in the Restaurant Input */}
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="position">
                Position in the Restaurant
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Message Box */}
            <div>
              <label className="block mb-2 text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded h-24"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>

          {/* Support Email and Phone Number */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Support Information</h3>
            <p className="mt-2 text-gray-700">
              Email: <a href="mailto:support@loopeats.com" className="text-blue-500">support@loopeats.com</a>
            </p>
            <p className="mt-1 text-gray-700">Phone: +237 000-000-000</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SupportPage;
