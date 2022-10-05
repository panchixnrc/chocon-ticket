import { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { AppContext } from "../context/Provider";

const Layout = ({ children }) => {
  const context = useContext(AppContext);
  const { user, loading } = context;

  return (
    <div className="font-sans h-screen flex flex-col justify-between">
      {user && <Navbar />}
      {user && <Sidebar />}

      {children}
      <Footer className="" />
    </div>
  );
};

export default Layout;
