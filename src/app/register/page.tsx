import { RegisterForm } from "@/components/Auth/RegisterForm";
import Container from "@/components/Container/Container";

export default function RegisterPage() {
  return (
    <Container>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm text-gray-600">Adventure starts here 🚀</p>
      </div>
      <RegisterForm />
    </Container>
  );
}
