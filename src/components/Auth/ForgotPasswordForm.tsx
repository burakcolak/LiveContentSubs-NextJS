"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Snackbar from "../Snackbar/Snackbar";
import { ForgotPasswordResponse } from "@/lib/services/MemberService";
import { parseResponse } from "@/lib/utils";
import LoadingForm from "./LoadingForm";

const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");

  const handleClose = () => {
    setShowSnackBar(false);
  };

  const [formValues, setFormValues] = useState({
    loginName: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const requestBody = {
      loginName: formData.get("loginName"),
    };

    setFormValues({ loginName: "" });

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseBody = await parseResponse<ForgotPasswordResponse>(
        response
      );

      setLoading(false);

      setSnackBarText(responseBody.title);
      setShowSnackBar(true);
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
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-teal-600 text-gray-50"
            >
              Sent Reset Password Link
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
