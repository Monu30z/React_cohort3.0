import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "../hooks/authHook";

const Loginpage = () => {
  const { navigate, register, handleSubmit, errors,loginForm } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

 

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-gray-500 mt-2">Login to continue</p>
        </div>

        {/* Form */}
        <form className="space-y-4"  onSubmit={handleSubmit(loginForm)}>
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>

            <div className="relative mt-2">
              <Mail size={20} className="absolute left-3 top-3 text-gray-400" />

              <input
              {...register("email",{
                required:"Email is required"
              })}
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
              { errors.email && <p className="text-red-900">{errors.email.message}</p>}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-2">
              <Lock size={20} className="absolute left-3 top-3 text-gray-400" />

              <input
                 {...register("password",{
                required:"password required"
              })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full border rounded-lg py-3 pl-10 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
             { errors.password && <p className="text-red-900">{errors.password.message}</p>}
          </div>

          {/* Remember */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-gray-500 mt-5">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
