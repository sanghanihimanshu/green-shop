/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "./component/Sidebar";
import Search from "./component/Search";
import { Navigate, Route, Routes } from "react-router-dom";
import Table from "./component/Table";
// import Order from "./component/Order";
import Productpage from "./component/Productpage";
import { useAtom } from "jotai";
import { card, logdin, table } from "../../../../utils/atoms";
import { local } from "../../../../utils/utils";
import { useMutation } from "react-query";
import axois from "axios";
import { useEffect } from "react";
import Loadcards from "./component/Loadcards";
const Dashboard = () => {
  const [islogin, setlogin] = useAtom(logdin);
  const mutation = useMutation(async () => {
    return await axois
      .post(
        "http://localhost:4000/auth/login",
        {},
        { headers: { acesstoken: local.getItem("acesstoken") } }
      )
      .then((res) => {
        window.localStorage.setItem("auth", res.data.auth);
        window.localStorage.setItem("email", res.data.email);
        window.localStorage.setItem("acesstoken", res.data.acesstoken);
        setlogin(local.getItem("auth"));
        return res.data;
      });
  });
  useEffect(() => {
    if (local.getItem("acesstoken") != null) {
      mutation.mutate();
    }
  }, []);

  if (islogin == "false" || local.auth == null) {
    return <Navigate to={"/auth/login"} />;
  } else {
    return (
      <div className="h-fit m-10 flex">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 -z-10"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <Sidebar />
        <div className="mx-10 h-[88vh] w-full">
          <Routes>
            <Route path="/shop" element={<Search section={card} />} />
            <Route
              path="/listed-product/*"
              element={<Search section={table} />}
            />
            <Route
              path="/shop/:id"
              element={
                <div className="mt-2 flex items-baseline justify-between w-full">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Product
                  </h3>
                </div>
              }
            />
            <Route path="/orders" element={<Search section={table} />} />
          </Routes>

          <div className="my-10">
            <Routes>
              <Route path="/shop" element={<Loadcards />} />
              <Route path="/listed-product/*" element={<Table />} />
              <Route path="/shop/:id" element={<Productpage />} />
              {/* <Route path="/orders" element={<Order />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
