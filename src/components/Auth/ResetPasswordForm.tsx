"use client";
import React, { FormEvent, useState } from "react";
import Snackbar from "@/components/Snackbar/Snackbar";
import { ResetPasswordResponse } from "@/lib/services/MemberService";
import { parseResponse } from "@/lib/utils";
import LoadingForm from "./LoadingForm";

type Props = {
  token: string;
};

const ResetPasswordForm = ({ token }: Props) => {
  const [loading, setLoading] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarLink, setSnackBarLink] = useState<
    | {
        href: string;
        text: string;
      }
    | undefined
  >(undefined);

  const handleClose = () => {
    setShowSnackBar(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    const requestBody = {
      loginName: formData.get("loginName"),
      newPassword: formData.get("newPassword"),
      token,
    };

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseBody = await parseResponse<ResetPasswordResponse>(response);
      setLoading(false);

      if (responseBody.status === 200)
        setSnackBarLink({ href: "/login", text: "Click to Login" });

      setSnackBarText(responseBody?.title ?? "An error occurred.");
      setShowSnackBar(true);
    } catch (error: any) {
      setLoading(false);
      setSnackBarText(error);
    }
  };

  if (loading) return <LoadingForm />;

  return (
    <div>
      {showSnackBar && (
        <div className="mb-4">
          <Snackbar
            text={snackBarText}
            handleClose={handleClose}
            link={snackBarLink}
          />
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
              <label htmlFor="newPassword" className="text-sm">
                New Password
              </label>
            </div>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
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
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
