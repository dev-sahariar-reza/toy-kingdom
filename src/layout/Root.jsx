import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-256px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
