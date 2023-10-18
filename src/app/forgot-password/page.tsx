import { ForgotPasswordForm } from "@/components/Auth/ForgotPasswordForm";
import FormContainer from "@/components/Container/Container";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <FormContainer>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Forgot Password</h1>
        <p className="text-sm text-gray-600">
          Please enter your login name that you have registered on our site.
        </p>
      </div>
      <ForgotPasswordForm />
    </FormContainer>
  );
};

export default ForgotPasswordPage;
