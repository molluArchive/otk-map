/** */
import { Outlet } from "react-router-dom";
import MainHeader from "./mainHeader";
import "../css/main.scss";

const MainLayout = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <Outlet />
    </>
  );
};

export default MainLayout;
