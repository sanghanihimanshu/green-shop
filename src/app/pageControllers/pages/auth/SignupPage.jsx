import { Link, useNavigate } from "react-router-dom";
import Box from "../../../components/Box";
import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
const Signup = () => {
  const navigate = useNavigate()
  const [isdata, setdata] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
  const mutation = useMutation(
    async () => {
     
        return await axios
        .post(import.meta.env.VITE_URL_API+"/auth/signup", isdata)
        .then((res) => {
          window.localStorage.setItem("auth",res.data.auth)
          window.localStorage.setItem("email",res.data.email)
          window.localStorage.setItem("acesstoken",res.data.acesstoken)
          window.localStorage.setItem("authtoken",res.data.authtoken)
          return res.data;
        })
    },
    {
      onSuccess: () => {

        return navigate('/auth/login');
      },
    }
  );

  const handlechange = (e) => {
    setdata({ ...isdata, [e.target.name]: e.target.value });
  };
  return (
    <Box>
      <div className="relative flex items-center justify-center">
        <div className="p-3 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 min-h-[500] sm:min-w-[480px] lg:min-w-[600px]">
          <div className="flex flex-col gap-y-6 m-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <Link to={"/"}>
              <div aria-hidden="true" className="flex space-x-1">
                <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                <div className="h-6 w-2 bg-primary"></div>
              </div>
            </Link>
            <h2 className="lg:text-2xl font-bold text-gray-900 sm:text-2xl dark:text-white">
              Signup in to your account
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    value={isdata.name}
                    onChange={(e) => handlechange(e)}
                    required
                    className="block p-4 pb-2 w-full  rounded-full text-black border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={isdata.email}
                    onChange={(e) => handlechange(e)}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                    className="block p-4 pb-2 w-full  rounded-full text-black border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-300"
                >
                  Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    name="contact"
                    type="tel"
                    pattern="[789][0-9]{9}"
                    autoComplete="mobile"
                    required
                    value={isdata.contact}
                    onChange={(e) => handlechange(e)}
                    className="block p-4 pb-2 w-full  rounded-full border-0 py-1.5 dark:text-white text-black dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={isdata.password}
                    onChange={(e) => handlechange(e)}
                    required
                    className="block p-4 pb-2 w-full  rounded-full border-0 text-black py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    mutation.mutate();
                  }}
                  disabled={mutation.status == "loading" ? true : false}
                  className={`flex w-full justify-center rounded-full ${
                    mutation.status == "loading" ? "bg-black" : ""
                  } bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 duration-[0.5s] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  Signup in
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              I Have An Account
              <Link
                to="/auth/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                <> </>Login now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Signup;
