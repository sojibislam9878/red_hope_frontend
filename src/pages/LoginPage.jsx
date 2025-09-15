import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { googleSignUP } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen 
      bg-gradient-to-br from-blue-100 via-purple-200 to-pink-200 
      dark:from-blue-900 dark:via-purple-900 dark:to-pink-950"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 text-sm">
          Login to continue to your account
        </p>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="********"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <input type="checkbox" {...register("remember")} />
            Remember me
          </label>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[var(--color-rhprimary)] to-[var(--color-rhsecondary)] text-white py-3 rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-300 dark:border-gray-700" />
          <span className="text-gray-400 dark:text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300 dark:border-gray-700" />
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button
            onClick={googleSignUP}
            type="button"
            className="flex items-center justify-center gap-2 flex-1 border border-gray-300 dark:border-gray-700 rounded-xl py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <FcGoogle size={20} /> Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 flex-1 bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700 transition"
          >
            <FaFacebook size={20} /> Facebook
          </button>
        </div>

        {/* Sign Up Redirect */}
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
