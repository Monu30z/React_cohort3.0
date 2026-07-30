import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../hooks/authHook";

const Registerpage = () => {
  const { navigate, register, handleSubmit, errors, registerForm } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Create Account 🚀
          </h1>
          <p className="text-sm text-gray-500 mt-1">Sign up to get started</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(registerForm)}>
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div className="relative mt-1">
              <User size={18} className="absolute left-3 top-3 text-gray-400" />

              <input
              {...register("name",{
                required:"name is required"
              })}
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {errors.name && <p className="text-red-800">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>

            <div className="relative mt-1">
              <Mail size={18} className="absolute left-3 top-3 text-gray-400" />

              <input
               {...register("email",{
                required:"email is required"
              })}
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
                        {errors.email && <p className="text-red-800">{errors.email.message}</p>}

          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-1">
              <Lock size={18} className="absolute left-3 top-3 text-gray-400" />

              <input
               {...register("password",{
                required:"password is required"
              })}
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="w-full border rounded-lg py-2.5 pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
                        {errors.password && <p className="text-red-800">{errors.password.message}</p>}

          </div>

          {/* Register Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition duration-300">
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Registerpage;
