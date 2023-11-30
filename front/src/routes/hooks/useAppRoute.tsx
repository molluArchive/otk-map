import { createBrowserRouter } from "react-router-dom";
import MainLayout from "src/components/layouts/mainLayout";
import MainScreen from "src/screen/main/mainScreen";

interface hookMember {
  router: any;
}

const useAppRoute = (): hookMember => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/main",
          element: <MainScreen />,
        },
        {
          path: "/kk",
          element: <MainScreen />,
        },
        {
          path: "/aa",
          element: <MainScreen />,
        },
      ],
    },
  ]);

  return {
    router,
  };
};

export default useAppRoute;
