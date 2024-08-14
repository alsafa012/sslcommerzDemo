import Lottie from "lottie-react";
import SpinnerLottie from "./Error.json";
const ErrorPage = () => {
  return (
    <div>
      <Lottie animationData={SpinnerLottie} loop={true} />
    </div>
  );
};

export default ErrorPage;
