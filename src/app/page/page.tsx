import { AuthActions } from "@/components/AuthActions/AuthActions";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/AuthButtons/AuthButtons";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import Link from "next/link";

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
        <div className="bg-white p-4 shadow-md">
          <div className="container mx-auto py-4">
            <LoginButton />
            <RegisterButton />
            <LogoutButton />
            <ProfileButton />
            <Link href="/viewbotting-on-twitch-service">Twitch</Link>
          </div>
        </div>
      </AuthProvider>
    </main>
  );
}
