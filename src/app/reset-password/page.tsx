import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";
import FormContainer from "@/components/Container/Container";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string | string[] | undefined };
};

const ResetPasswordPage = ({ searchParams }: Props) => {
  const code = searchParams.code ? (searchParams.code as string) : "";

  return (
    <FormContainer>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Reset Password</h1>
        <p className="text-sm text-gray-600">Please set your new password.</p>
      </div>
      <ResetPasswordForm token={code} />
    </FormContainer>
  );
};

export default ResetPasswordPage;
