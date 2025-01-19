import React, { useState } from "react";
import axios from "axios";
import apiClient from "@/lib/apiClient";

// Define a generic API response type
type ApiResponse<T = unknown> = {
  success: boolean;
  message: string;
  data: T;
};

const endpoints = [
  { name: "Signup", url: "/auth/restaurant-signup", method: "POST" },
  { name: "Login", url: "/auth/restaurant-login", method: "POST" },
  { name: "Logout", url: "/auth/restaurant-logout", method: "POST" },
  { name: "Change Password", url: "/auth/restaurant-change-password", method: "POST" },
  { name: "Forgot Password", url: "/auth/restaurant-forgot-password", method: "POST" },
  { name: "Verify OTP", url: "/auth/restaurant-verify-otp", method: "POST" },
  { name: "Reset Password", url: "/auth/restaurant-reset-password", method: "POST" },
  { name: "Protected Route", url: "/auth/restaurant-protected", method: "GET" },
  { name: "Get Category", url: "/restaurants/categories/{categoryId}", method: "GET" },
  { name: "Create Restaurant", url: "/restaurants/create", method: "POST" },
  { name: "Update Restaurant", url: "/restaurants/update/{restaurantId}", method: "PUT" },
  { name: "Delete Restaurant", url: "/restaurants/delete/{restaurantId}", method: "DELETE" },
  { name: "Paginated Restaurants", url: "/restaurants/paginated", method: "GET" },
];

const EndpointTester: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<{
    name: string;
    url: string;
    method: string;
  }>(endpoints[0]);

  const [requestData, setRequestData] = useState<string>("");
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTestEndpoint = async () => {
    try {
      setError(null);
      let url = selectedEndpoint.url;

      // Replace placeholders dynamically
      if (url.includes("{categoryId}")) {
        url = url.replace("{categoryId}", "1"); // Replace with actual category ID
      }
      if (url.includes("{restaurantId}")) {
        url = url.replace("{restaurantId}", "1"); // Replace with actual restaurant ID
      }

      const data = requestData ? JSON.parse(requestData) : undefined;

      const res = await apiClient.request<ApiResponse>({
        url,
        method: selectedEndpoint.method,
        data,
      });

      setResponse(res.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data || err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Endpoint Tester</h1>

      <div className="mb-4">
        <label className="block font-bold">Select Endpoint</label>
        <select
          value={selectedEndpoint.url}
          onChange={(e) =>
            setSelectedEndpoint(
              endpoints.find((endpoint) => endpoint.url === e.target.value) || endpoints[0]
            )
          }
          className="w-full border p-2"
        >
          {endpoints.map((endpoint) => (
            <option key={endpoint.url} value={endpoint.url}>
              {endpoint.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold">Request Data (JSON)</label>
        <textarea
          value={requestData}
          onChange={(e) => setRequestData(e.target.value)}
          className="w-full border p-2"
          placeholder='e.g., {"key": "value"}'
        />
      </div>

      <button
        onClick={handleTestEndpoint}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Test Endpoint
      </button>

      {response && (
        <div className="mt-4 p-4 border bg-green-100">
          <h2 className="font-bold">Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 border bg-red-100">
          <h2 className="font-bold">Error:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default EndpointTester;
