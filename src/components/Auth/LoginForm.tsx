"use client";
// components/LoginForm.tsx
import React, { useState } from "react";
import InputField from "../Dashboard/InputField";
import Button from "../Dashboard/Button";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form's default behavior
    router.replace("/dashboard"); // Navigate to dashboard
  };

  return (
    <div
      className="border-[2px] border-[#8F927E] p-8 rounded-lg flex flex-col gap-8"
      style={{ width: "350px" }}
    >
      <div className="flex flex-col gap-[32px] text-center">
        <h2 className="text-[32px] font-[500] leading-[38.72px]">Welcome</h2>
        <p className="text-[24px] font-[400] leading-[29.04px] text-[#131313]">
          Log in as Admin
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <InputField
          label="Email/ID"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Log In" />
        <a href="#" className="text-right text-[#131313]">
          Forgot password?
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
