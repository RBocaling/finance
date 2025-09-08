import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/dashboard/page";
import RootLayout from "./pages";
import AdminLogin from "./pages/auth/Login";
import useAuthenticate from "./hooks/useAuthenticated";

function App() {
  const navigate = useNavigate();
  const { data: isAuthenticate, isLoading } = useAuthenticate();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticate) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  }, [isAuthenticate, isLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
