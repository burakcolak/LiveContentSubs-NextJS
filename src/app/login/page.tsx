"use client";
import React from "react";
import Container from "@/components/Container/Container";
import LoginForm from "@/components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <Container>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-600">Sign in to access your account</p>
      </div>
      <LoginForm />
    </Container>
  );
}
