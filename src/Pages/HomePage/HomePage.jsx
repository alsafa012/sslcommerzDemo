import axios from "axios";
import { Link } from "react-router-dom";
// import { PiNavigationArrowDuotone } from "react-icons/pi";
// <PiNavigationArrowDuotone />
const HomePage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    axios
      .post("http://localhost:5000/create-payment", {
        amount: 12000,
        cur: "USDzzx",
      })
      .then((res) => {
        const reDirectUrl = res.data.paymentUrl;
        console.log(reDirectUrl);
        if (reDirectUrl) {
          window.location.replace(reDirectUrl);
        }
        console.log(res.data);
      });
  };
  const handleDelete = () => {
    axios
      .delete("http://localhost:5000/paymentInfo")
      .then((res) => console.log(res.data));
  };
  return (
    <div className="-my-3 flex justify-center items-center min-h-screen py-5 md:py-10 bg-[url('https://i.ibb.co/10kGMgs/Cover-EBE-1170x675.jpg')] bg-no-repeat bg-cover">
      {/* <PageTitle title="Login"></PageTitle> */}
      <div className="relative border border-[#aaa69d] backdrop-blur-xl w-4/5 md:w-1/2 lg:w-1/3 mx-auto p-5 rounded-xl overflow-hidden">
        {/* <p className="text-3xl font-bold mb-6 text-center mt-5">Login Here..</p> */}
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>
        <h3 className="mt-3 text-xl font-medium text-center text-black">
          Welcome Back
        </h3>
        <p className="mt-1 text-center text-gray-700">
          Login or create account
        </p>
        <Link to="/">
          <button
            onClick={handleDelete}
            className="bg-[#D99904] text-sm text-white border-none hover:bg-[#d99a08e5] absolute top-0 left-0 inline-flex  items-center gap-1 px-1 py-1 md:px-4 md:py-2 lg:px-2 lg:py-2 xl:px-4 xl:py-2 rounded-br-lg active:scale-[0.95] hover:scale[1.05]"
          >
            Home
          </button>
        </Link>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="">
            <label className="label text-black font-medium">
              <span className="">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input bg-transparent input-bordered text-black font-medium w-full"
              required
            />
          </div>
          <div className=" relative">
            <label className="label text-black font-medium">
              <span className="">Password</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="input bg-transparent input-bordered text-black font-medium w-full"
              required
            />
          </div>

          <div className="mt-6">
            <button className="btn btn-secondary w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default HomePage;
