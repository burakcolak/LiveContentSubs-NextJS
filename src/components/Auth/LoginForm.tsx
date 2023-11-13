"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@/components/Snackbar/Snackbar";
import LoadingForm from "./LoadingForm";
import { PagePaths } from "@/models/pagePaths";

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

    if (result?.error) {
      console.error("Authentication failed");
      setLoading(false);
      setSnackBarText("Authentication failed, please try again.");
      setShowSnackBar(true);
    } else {
      setLoading(false);
      setShowSnackBar(true);
      setSnackBarText("Login successful, redirecting...");
      setTimeout(() => {
        router.push(PagePaths.Home);
      }, 1500);
    }
  };

  if (loading) return <LoadingForm />;

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
                href={PagePaths.ForgotPassword}
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
              href={PagePaths.Register}
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
