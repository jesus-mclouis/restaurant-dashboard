"use client";
import React, { useState, useEffect } from "react";
import InputField from "../Dashboard/InputField";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthForm: React.FC = () => {
  const [formState, setFormState] = useState<"login" | "signup" | "reset" | "otp" | "new-password">(
    "login"
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0); // Timer for OTP expiration
  const [showPassword, setShowPassword] = useState(false); // Toggle for password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for confirm password

  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpTimer > 0) {
      timer = setTimeout(() => setOtpTimer((prev) => prev - 1), 1000); // Decrease timer every second
    }
    return () => clearTimeout(timer);
  }, [otpTimer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (formState === "login") {
        if (!email || !password) {
          setError("Email and Password are required.");
          return;
        }

        setLoading(true);
        const response = await axios.post("/api/auth/restaurant-login", { email, password });

        const { access_token, refresh_token } = response.data;

      document.cookie = `refreshToken=${refresh_token}; path=/; HttpOnly; Secure; SameSite=Strict;`;
      localStorage.setItem("accessToken", access_token); // Store access token temporarily
        alert("Login successful!");
        console.log(access_token, refresh_token)
        router.replace("/dashboard");
      } else if (formState === "signup") {
        if (!email || !password || !firstName || !lastName || !phoneNumber || password !== cpassword) {
          setError("All fields are required, and passwords must match.");
          return;
        }

        setLoading(true);
        const response = await axios.post("/api/auth/restaurant-signup", {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          cpassword
        });
        alert("Signup successful! Please log in.");
        setFormState("login");
        // console.log(response.data)
      } else if (formState === "reset") {
        if (!email) {
          setError("Email is required.");
          return;
        }

        setLoading(true);
        await axios.post("/api/auth/restaurant-request-otp", { email });
        setOtpTimer(60); // Start OTP timer (1 minute)
        setFormState("otp");
        alert("OTP has been sent to your email.");
      } else if (formState === "otp") {
        if (!otp) {
          setError("Please enter the OTP.");
          return;
        }

        setLoading(true);
        await axios.post("/api/auth/restaurant-verify-otp", { email, otp });
        setFormState("new-password");
        alert("OTP verified! Please set your new password.");
      } else if (formState === "new-password") {
        if (!password || !cpassword || password !== cpassword) {
          setError("Passwords are required and must match.");
          return;
        }

        setLoading(true);
        await axios.post("/api/auth/reset-password", { email, password });
        alert("Password reset successful! Please log in.");
        setFormState("login");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError(null);
    try {
      setLoading(true);
      await axios.post("/api/auth/restaurant-request-otp", { email }); // Resend OTP
      setOtpTimer(60); // Restart OTP timer
    
      alert("OTP has been resent to your email.");
    } catch (err: any) {
      setError(err.response?.data?.message || "Unable to resend OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-[1px] border-gray-300 p-4 rounded-md flex flex-col gap-4 w-[75%] max-w-[300px] mx-auto">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-[20px] font-semibold leading-[28px]">
          {formState === "login" && "Welcome Back"}
          {formState === "signup" && "Create an Account"}
          {formState === "reset" && "Reset Password"}
          {formState === "otp" && "Enter OTP"}
          {formState === "new-password" && "Set New Password"}
        </h2>
        <p className="text-[14px] font-normal leading-[20px] text-gray-700">
          {formState === "login" && "Log in to your account"}
          {formState === "signup" && "Sign up with your details below"}
          {formState === "reset" && "Enter your email to reset your password"}
          {formState === "otp" && "Enter the OTP sent to your email"}
          {formState === "new-password" && "Set your new password below"}
        </p>
      </div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        {(formState === "login" || formState === "reset" || formState === "otp" || formState === "new-password") && (
          <InputField
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {formState === "login" && (
          <div className="relative">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        )}
        {formState === "signup" && (
          <>
            <InputField
              label="First Name"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
              label="Last Name"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
            <InputField
              label="Phone Number"
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="relative">
              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="relative">
              <InputField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                id="cpassword"
                value={cpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </>
        )}
        {formState === "otp" && (
          <>
            <InputField
              label="OTP"
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-2">
              {otpTimer > 0
                ? `OTP is valid for ${otpTimer} seconds.`
                : "OTP has expired. Please request a new one."}
            </p>
            <button
              type="button"
              onClick={handleResendOtp}
              className="text-blue-500 underline"
              disabled={loading || otpTimer > 0}
            >
              Resend OTP
            </button>
          </>
        )}
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          className={`px-4 py-2 text-white font-medium rounded-md transition-all duration-300 ease-in-out ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
      <p className="text-center text-xs mt-2">
        {formState === "login" && (
          <>
            <span
              onClick={() => setFormState("signup")}
              className="text-blue-500 cursor-pointer underline"
            >
              Don't have an account? Sign up
            </span>
            <br />
            <span
              onClick={() => setFormState("reset")}
              className="text-blue-500 cursor-pointer underline"
            >
              Forgot Password?
            </span>
          </>
        )}
        {formState !== "login" && (
          <span
            onClick={() => setFormState("login")}
            className="text-blue-500 cursor-pointer underline"
          >
            Back to login
          </span>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
