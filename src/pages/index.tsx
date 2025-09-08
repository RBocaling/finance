import { Outlet, useNavigate } from "react-router-dom";
import useAuthenticate from "../hooks/useAuthenticated";
import { useEffect } from "react";
import Header from "../components/Header";

const RootLayout = () => {
  const navigate = useNavigate();
  const { data: isAuthenticate } = useAuthenticate();

  useEffect(() => {
    if (!isAuthenticate) {
      navigate("/login");
    }
  }, [isAuthenticate]);
  return (
    <main className="pt-20">
      <Header />
      <Outlet />
    </main>
  );
};

export default RootLayout;
