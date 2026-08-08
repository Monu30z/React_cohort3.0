import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "../../hooks/useAuthHook";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {navigate,register,handleSubmit,errors,loginForm }=useAuth()

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>
          <p className="text-slate-400 mt-2">
            Login to your account
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(loginForm)}>

          {/* Email */}
          <div>
            <label className="text-sm text-slate-300">
              Username
            </label>

            <div className="relative mt-2">
              <Mail
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
              {
                ...register("username",{
                    required:"username is requied"
                })
              }
                type="text"
                placeholder="Enter your Username"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {errors.username && <p className="text-red-800">{errors.username.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-slate-300">
              Password
            </label>

            <div className="relative mt-2">
              <Lock
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                 {
                ...register("password",{
                    required:"password is requied"
                })
              }
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-10 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-800">{errors.password.message}</p>}
          </div>

          {/* Remember */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex gap-2 text-slate-400">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-400 hover:text-blue-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold flex justify-center items-center gap-2 transition">
            <LogIn size={18} />
            Login
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{" "}
          <button
           onClick={()=>{
            navigate('/register')
           }}
            className="text-blue-400 hover:underline"
          >
            Register
          </button>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;