"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Snackbar from "../Snackbar/Snackbar";
import { RegisterMemberResponse } from "@/lib/services/MemberService";
import LoadingForm from "./LoadingForm";
import { PagePaths } from "@/models/pagePaths";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");

  const handleClose = () => {
    setShowSnackBar(false);
  };

  const [formValues, setFormValues] = useState({
    loginName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const requestBody = {
      loginName: formData.get("loginName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    setFormValues({ loginName: "", email: "", password: "" });

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseBody = (await response.json()) as RegisterMemberResponse;

      setLoading(false);
      if (!response.ok) {
        setSnackBarText(responseBody.title);
        setShowSnackBar(true);
        return;
      }

      router.push(PagePaths.Login);
    } catch (error: any) {
      setLoading(false);
      setSnackBarText(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
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
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="loginName" className="block mb-2 text-sm">
              Channel Name / Login Name
            </label>
            <input
              name="loginName"
              id="loginName"
              required
              value={formValues.loginName}
              onChange={handleChange}
              placeholder="Login Name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={formValues.password}
              onChange={handleChange}
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
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
