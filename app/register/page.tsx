"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister() {
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "register",
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      // ✅ Save token
      localStorage.setItem("token", data.data.token);

      // ✅ Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="shadow-xl shadow-gray-400 rounded-2xl sm:w-96 w-72 p-6 flex flex-col gap-4">
        <div className="w-full flex justify-center items-center text-xl font-bold">
          Register
        </div>

        <div className="w-full flex justify-center items-center text-sm text-gray-500">
          Sign up to get started!
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div>
          <p className="text-gray-500 text-sm">Username</p>
          <input
            type="text"
            placeholder="Enter your username"
            className="shadow text-sm shadow-gray-300 my-2 p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300 pl-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <p className="text-gray-500 text-sm">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="shadow text-sm shadow-gray-300 my-2 p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300 pl-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleRegister}
          className="border p-1 pb-2 w-full bg-[#37383F] text-white rounded-lg cursor-pointer text-sm hover:bg-neutral-600"
        >
          Register
        </button>

        <div className="w-full flex justify-center items-center text-sm text-gray-500">
          Already have an account?
          <Link href="/login" className="hover:underline pl-1">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
