import { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { AppContext } from "../context/Provider";

const Layout = ({ children }) => {
  const context = useContext(AppContext);
  const { user, imprimiendo } = context;
  /*  if (imprimiendo) {
    return (
      <div className="font-sans h-screen flex flex-col justify-between">
        {children};
      </div>
    );
  } else { */
  return (
    <div className="font-sans h-screen flex flex-col justify-between ">
      {user ? <Navbar /> : null}
      {user ? <Sidebar /> : null}

      {children}
      <Footer className="" />
    </div>
  );
  /*   } */
};

export default Layout;
