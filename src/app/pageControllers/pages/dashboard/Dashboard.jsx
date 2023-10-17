/* eslint-disable no-constant-condition */
import Sidebar from "./component/Sidebar";
import Search from "./component/Search";
import Cards from "./component/cards";
import { Route, Routes} from "react-router-dom";
import Table from "./component/Table";
import Order from "./component/Order";
import Productpage from "./component/Productpage";

const Dashboard = () => {
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
        <Search />
        <div className="my-10">
          <Routes>
            <Route
              path="/shop"
              element={
                <div className="grid grid-cols-4 align-middle w-full h-[75vh] flex-wrap overflow-scroll my-10 gap-5">
                  <Cards />
                </div>
              }
            />
            <Route path="/listed-product" element={<Table />}/>
            <Route path="/shop/:id" element={<Productpage/>} />
            <Route path="/orders" element={<Order />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
