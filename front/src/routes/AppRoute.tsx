import { RouterProvider } from "react-router-dom";
import useAppRoute from "./hooks/useAppRoute";

const AppRoute = () => {
  const hookMember = useAppRoute();
  return <RouterProvider router={hookMember.router} />;
};

export default AppRoute;
