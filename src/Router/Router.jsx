import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import CancelPayment from "../Pages/HomePage/CancelPayment";
import FailPayment from "../Pages/HomePage/FailPayment";
import SuccessPayment from "../Pages/HomePage/SuccessPayment";
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
      {
        path: "/successPage",
        element: <SuccessPayment></SuccessPayment>,
      },
      {
        path: "/failPage",
        element: <FailPayment></FailPayment>,
      },
      {
        path: "/cancelPage",
        element: <CancelPayment></CancelPayment>,
      },
    ],
  },
]);

export default myCreatedRouter;
