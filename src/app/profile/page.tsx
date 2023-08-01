import { AuthActions } from "@/components/AuthActions/AuthActions";
import { AuthOnly } from "@/components/AuthOnly/AuthOnly";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";

export default function Profile() {
  return (
    <AuthProvider>
      <AuthOnly>
        <AuthActions />
      </AuthOnly>
    </AuthProvider>
  );
}
