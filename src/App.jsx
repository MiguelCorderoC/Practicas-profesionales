import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import LogInView from "./views/auth/LogInView";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Toaster position="top-center" closeButton richColors />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LogInView />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
