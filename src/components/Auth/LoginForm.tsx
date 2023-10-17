"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@/components/Snackbar/Snackbar";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");

  const handleClose = () => {
    setShowSnackBar(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const loginName = form.loginName.value;
    const password = form.password.value;

    const credentials = { email: loginName, password };

    const result = await signIn("credentials", {
      redirect: false,
      ...credentials,
    });

    console.log("logiiiin", result);
    setLoading(false);
    if (result?.error) {
      console.error("Authentication failed");
      setSnackBarText("Authentication failed, please try again.");
      setShowSnackBar(true);
    } else {
      // Redirect or show a success message
      router.push("/");
    }
  };

  if (loading)
    return (
      <div>
        <div className="h-48 rounded-t bg-gray-300"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
          <div className="flex items-center justify-center space-x-8">
            <div className="w-4 h-4 rounded-full animate-ping bg-teal-600"></div>
            <div className="w-4 h-4 rounded-full animate-ping bg-teal-600"></div>
            <div className="w-4 h-4 rounded-full animate-ping bg-teal-600"></div>
          </div>
          <div className="w-full h-6 rounded bg-gray-300"></div>
          <div className="w-full h-6 rounded bg-gray-300"></div>
          <div className="w-3/4 h-6 rounded bg-gray-300"></div>
        </div>
      </div>
    );

  return (
    <div>
      {showSnackBar && (
        <div className="mb-4">
          <Snackbar text={snackBarText} handleClose={handleClose} />
        </div>
      )}
      <form action="" onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="loginName" className="block mb-2 text-sm">
              Login Name
            </label>
            <input
              required
              name="loginName"
              id="LoginName"
              placeholder="Login Name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-teal-600 text-gray-50"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Don't have an account yet? &nbsp;
            <a
              rel="noopener noreferrer"
              href="/register"
              className="hover:underline text-teal-600"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
