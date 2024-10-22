import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import LogInView from "./views/auth/LogInView";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPasswordView from "./views/auth/ResetPasswordView";
import UpdateProfile from "./views/auth/UpdateProfileView";

function App() {
  return (
    <>
      <AuthProvider>
        <Toaster position="top-center" closeButton richColors />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomeView />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LogInView />} />
          <Route path="/reset-password" element={<ResetPasswordView />} />
          <Route
            path="/update-profile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
