// pages/LoginPage.tsx
import React from "react";
import LoginForm from "../Auth/LoginForm";
import Header from "../Dashboard/Header";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFBEC] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex flex-grow justify-center items-center">
        <LoginForm />
        <div className="ml-10">
          <div className="text-[#131313] text-center">
            <p className="text-[18px] leading-[24px]">
              Loop Technologies Food and Delivery Service is committed to
              supporting their clients wholeheartedly and all through
            </p>
          </div>
          <div className="mt-8">
            <img
              src="/path-to-image.jpg"
              alt="Restaurant"
              className="rounded-full w-[300px] h-[300px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 text-[#131313]">
        All rights reserved ©
      </footer>
    </div>
  );
};

export default LoginPage;
