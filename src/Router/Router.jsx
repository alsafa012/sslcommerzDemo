import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
        //   errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <HomePage></HomePage>,
               },
          ],
     },
]);

export default myCreatedRouter;
