// pages/LoginPage.tsx
import React from "react";
import LoginForm from "../Auth/LoginForm";
import Header from "../Dashboard/Header";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFBEC] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-evenly px-6 lg:px-16 py-12 gap-12 lg:gap-20 flex-grow">
        {/* Login Form */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <LoginForm />
        </div>

        {/* Supporting Text and Image */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
          <p className="text-[16px] leading-[24px] text-[#131313] max-w-md">
            Loop Technologies Food and Delivery Service is committed to
            supporting their clients wholeheartedly and all through.
          </p>
          <img
            src="https://www.unitopledstrip.com/wp-content/uploads/2024/07/Ultimate-Guide-33-Restaurant-Lighting-Ideas2.webp"
            alt="Restaurant"
            className="rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover shadow-md"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 text-[#131313] text-sm">
        All rights reserved © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default LoginPage;
