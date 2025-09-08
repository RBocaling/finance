import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken-admin-finance");
    navigate("/login");
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-black/40 border-b border-yellow-500/20">
      <nav className="container mx-auto flex items-center justify-between h-20">
        <img src="/AUPLogo.svg" alt="AURUM Logo" className="w-36" />
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer text-red-500 hover:text-red-400"
        >
          <IoMdLogOut size={22} />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Header;
