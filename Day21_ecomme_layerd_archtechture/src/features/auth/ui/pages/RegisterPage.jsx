import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuthHook";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
    const {navigate ,register,handleSubmit,errors,registerForm}=useAuth()

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="text-slate-400 mt-2">
            Register to continue
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(registerForm)}>

          {/* Name */}
          <div>
            <label className="text-sm text-slate-300">
              Full Name
            </label>

            <div className="relative mt-2">
              <User
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
              {...register("name",{
                required:"name is requied"
              })}
                type="text"
                placeholder="Enter your name"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {errors.name && <p className="text-red-800">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-slate-300">
              Email
            </label>

            <div className="relative mt-2">
              <Mail
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
              {...register("email",{
                required:"email is requied"
              })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {errors.email && <p className="text-red-800">{errors.email.message}</p>}
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
              {...register("password",{
                required:"password is requied"
              })}
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
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

          {/* Register */}
          <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white font-semibold flex justify-center items-center gap-2 transition">
            <UserPlus size={18} />
            Create Account
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <button onClick={()=>{
            navigate("/")
          }}
           
            className="text-blue-400 hover:underline"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;