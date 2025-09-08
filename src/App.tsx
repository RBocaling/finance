import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/dashboard/page";
import RootLayout from "./pages";
import AdminLogin from "./pages/auth/Login";
import useAuthenticate from "./hooks/useAuthenticated";
import { getERC20Balance } from "./hooks/useGetMainWalletByAddress";

function App() {
  const navigate = useNavigate();
  const { data: isAuthenticate, isLoading } = useAuthenticate();

  // test start

  (async () => {
    const providerUrl = "https://bsc-dataseed.bnbchain.org";
    const tokenAddress = "0x55d398326f99059fF775485246999027B3197955";
    // const walletAddress = "0xBDFeD1F6786bb5e568C1cE30324acB2Bb7285590"; //main
    const walletAddress = "0x93408e44DD2863f16bbaab8fb4B7BfEB2572a5e4"; //gca

    const balance = await getERC20Balance(
      providerUrl,
      tokenAddress,
      walletAddress
    );
  })();
  // test end

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
