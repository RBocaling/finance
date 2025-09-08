import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "../../api/loginApi";

type LoginData = {
  identifier: string;
  password: string;
};

const AdminLogin = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState<LoginData>({
    identifier: "",
    password: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (response: any) => {
      localStorage.setItem("accessToken-admin-finance", response.jwt);
      navigate("/");
    },
    onError: (error) => console.error("Login failed:", error),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div
      id="login"
      className="w-screen flex justify-center items-center h-screen relative bg-no-repeat"
    >
      <div className="relative z-10 w-full max-w-lg p-10 border border-yellow-500/20 rounded-2xl shadow-lg text-white mx-4 bg-black/40">
        <div className="text-center mb-8">
          <p className="text-white text-4xl mb-2 font-bold">
            <span className="text-golden">AURUM FINANCE</span>
          </p>
          <p className="text-gray-400">
            Secure access to your financial dashboard — please log in with your
            admin credentials to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-white mb-1 block">User Name</label>
            <input
              placeholder="Enter your username"
              value={formData.identifier}
              onChange={(e) =>
                setFormData({ ...formData, identifier: e.target.value })
              }
              className="w-full rounded-lg bg-gray-200 text-black px-3 py-3 focus:outline-none placeholder:text-neutral-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-white mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full rounded-lg bg-gray-200 text-black px-3 py-3 focus:outline-none placeholder:text-neutral-500"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-white">
              <input type="checkbox" className="accent-golden" />
              Remember me
            </label>
            <a href="#" className="text-golden hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-yellow-600 text-white rounded-lg font-semibold py-3 disabled:opacity-70"
          >
            {isPending ? "Logging in..." : "Login to your account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
