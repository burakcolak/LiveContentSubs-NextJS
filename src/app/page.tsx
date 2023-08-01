import { AuthActions } from "@/components/AuthActions/AuthActions";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/AuthButtons/AuthButtons";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <AuthProvider>
        <div>
          <AuthActions />
        </div>
        <div>
          <LoginButton />
          <RegisterButton />
          <LogoutButton />
          <ProfileButton />
        </div>
      </AuthProvider>
    </main>
  );
}
