import { useForm } from "react-hook-form";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const SignUpPage = () => {
  const { googleSignUP, facebookSingUP, setUserData } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      let imageUrl = null;
      if (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBBAPIKYE}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const result = await res.json();

        if (result.success) {
          imageUrl = result.data.url;
        } else {
          console.error("Image upload failed:", result);
        }
      }

      const signUpUserData = {
        ...data,
        photo: imageUrl,
        phone: data.countryCode + data.phone,
      };

      try {
        const res = await axios.post(
          "http://localhost:3000/signup",
          signUpUserData
        );
        setUserData(res?.data.user);
      } catch (err) {
        console.log(err.response?.data || "Signup failed");
      }
    } catch (error) {
      console.error("Error in signup:", error);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen 
      bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
      dark:from-blue-900 dark:via-purple-900 dark:to-pink-950"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-lg my-3"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 text-sm">
          Join us today! Fill out the form below
        </p>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              {...register("firstName", { required: "First name is required" })}
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Deo"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
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
            placeholder="******"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "At least 6 characters required",
              },
              validate: {
                hasUpper: (value) =>
                  /[A-Z]/.test(value) || "Must include an uppercase letter",
                hasLower: (value) =>
                  /[a-z]/.test(value) || "Must include a lowercase letter",
                hasNumber: (value) =>
                  /\d/.test(value) || "Must include a number",
              },
            })}
            className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="******"
            {...register("conPassword", {
              required: "confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          {errors.conPassword && (
            <p className="text-red-500 text-sm">{errors.conPassword.message}</p>
          )}
        </div>

        {/* Phone with Country Code */}
        <div>
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Phone
          </label>
          <div className="flex gap-2 mt-1">
            <select
              {...register("countryCode", { required: "Code is required" })}
              className="p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+880">🇧🇩 +880</option>
            </select>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{6,15}$/, message: "Invalid phone" },
              })}
              className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="123456789"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Upload Photo */}
        <div>
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Upload Photo
          </label>
          <div className="mt-2 flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              id="photo"
              {...register("photo", { required: "Photo is required" })}
              onChange={handlePhotoChange}
              className="hidden"
            />
            <label
              htmlFor="photo"
              className="cursor-pointer bg-gradient-to-r from-[var(--color-rhprimary)] to-[var(--color-rhsecondary)] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
            >
              Choose Photo
            </label>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-full border-2 border-blue-300 shadow"
              />
            )}
          </div>
          {errors.photo && (
            <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must accept terms & conditions",
            })}
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            I agree to the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms & Conditions
            </a>
          </span>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm">{errors.terms.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[var(--color-rhprimary)] to-[var(--color-rhsecondary)] text-white py-3 rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Sign Up
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
            onClick={facebookSingUP}
            type="button"
            className="flex items-center justify-center gap-2 flex-1 bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700 transition"
          >
            <FaFacebook size={20} /> Facebook
          </button>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Log In
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
