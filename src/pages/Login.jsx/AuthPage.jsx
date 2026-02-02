import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import { getDeviceId } from "./deviceId"; // your helper file

const API_BASE = "http://localhost:8000/api"; // change to your backend URL

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(from, { replace: true }); // or dashboard/home
    }
  }, [navigate, from]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const deviceId = getDeviceId();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }

    if (!isLogin && !formData.name) {
      setError("Full name is required");
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      const endpoint = isLogin ? "/login" : "/register";
      const body = isLogin
        ? { email: formData.email, password: formData.password, deviceId }
        : { ...formData, deviceId };

      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Save token and redirect
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      // notify other windows/components about auth change
      window.dispatchEvent(new Event("auth-change"));
      alert(isLogin ? "Login successful!" : "Registration successful!");
      navigate(from, { replace: true }); // go to previous or home
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
        <div className="p-8 pb-4 text-center">
          <h1 className="text-3xl font-bold text-red-600">Bitzo</h1>
          <p className="text-gray-400 mt-2">
            {isLogin ? "Sign in to continue" : "Create your account"}
          </p>
        </div>

        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-4 font-medium ${
              isLogin ? "text-white border-b-2 border-red-600" : "text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-4 font-medium ${
              !isLogin
                ? "text-white border-b-2 border-red-600"
                : "text-gray-400"
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-5">
          {error && (
            <div className="bg-red-950/50 border border-red-800 text-red-300 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {!isLogin && (
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3.5 pl-11 pr-4 focus:outline-none focus:border-red-600"
              />
            </div>
          )}

          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3.5 pl-11 pr-4 focus:outline-none focus:border-red-600"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3.5 pl-11 pr-12 focus:outline-none focus:border-red-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
              loading ? "bg-gray-700" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
            {!loading && <ArrowRight size={18} />}
          </button>

          <div className="text-center text-sm text-gray-500 mt-6">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-red-500 hover:text-red-400"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-red-500 hover:text-red-400"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
