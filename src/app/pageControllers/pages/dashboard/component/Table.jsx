import { PencilIcon } from "@heroicons/react/24/solid";
import { useQuery} from "react-query";
import { Link, Route, Routes } from "react-router-dom";
import axois from "axios";
import { local } from "../../../../../utils/utils";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { New } from "./New";
import Edit from "./Edit";
import { useAtom } from "jotai";
import { sidebox, table } from "../../../../../utils/atoms";
const Table = () => {
  const [isbox, setbox] = useAtom(sidebox);
  const [tabledata,settabledata]=useAtom(table)
  useQuery(["cards"],
    async () => {
      return await axois.post(import.meta.env.VITE_URL_API+"/crops/user", {
          email: local.getItem("email"),
        }).then((res) => {
          settabledata(res.data)
          return res.data;
        })
        .catch((error) => {
          alert(error);
        });
      }
  );
  return (
    <>
      <div className="flex w-auto gap-5">
        <div className="overflow-scroll bg-white border-[1px] dark:border-none border-gray-100 dark:bg-slate-800 hover:shadow-2xl hover:shadow-slate-800/10 w-[100%] h-[480px] rounded-lg">
          <table className=" w-[97%] m-4 dark:text-white text-xs ">
            <thead>
              <tr className="text-start border-b-2 border-gray-800">
                <th className="text-start px-4 py-2 font-semibold">Pid</th>
                <th className="text-start px-4 py-2 font-semibold">Name</th>
                <th className="text-start px-4 py-2 font-semibold">
                  Discription
                </th>
                <th className="text-start px-4 py-2 font-semibold">
                Quantity
                </th>
                <th className="text-start px-4 py-2 font-semibold">Date</th>
                <th className="text-start px-4 py-2 font-semibold">Status</th>
                <th className="text-start px-4 py-2 font-semibold">LastBid</th>
                <th className="text-start px-4 py-2 font-semibold">
                  Base Price
                </th>
                <th className="text-start px-4 py-2 font-semibold">
                  Last bider
                </th>
                <th className="text-start px-4 py-2 font-semibold">Edit</th>
              </tr>
            </thead>
            <tbody>
              {(tabledata == null || tabledata == [])
                ? null
                : tabledata.map((info) => (
                    <>
                      <tr key={info._id} className="border-b-2 border-gray-800">
                        <td className="px-4 py-2">
                          <Link key={info._id}
                            to={"/dashboard/shop/" + info._id}
                            className="hover:text-secondary"
                          >
                            Show product
                          </Link>
                        </td>
                        <td className="px-4 py-2">{info.name}</td>
                        <td className="px-4 py-2">{info.description}</td>
                        <td className="px-4 py-2">{info.Quantity}</td>
                        <td className="px-4 py-2">{info.date.split("T")[0]}</td>
                        <td className="px-4 py-2">{info.status}</td>
                        <td className="px-4 py-2">{info.lastbid}</td>
                        <td className="px-4 py-2">{info.basePrice}</td>
                        <td className="px-4 py-2">{info.lastbider}</td>
                        <td className="px-4 py-2">
                          <Link key={info._id}
                            onClick={() => {
                              setbox([true,"Edit"]);
                            }}
                            to={"edit/" + info._id}
                            className="flex items-center justify-center h-10 w-10 p-3 p bg-primary/80 duration-700 hover:bg-primary rounded-lg cursor-pointer text-white"
                          >
                            <PencilIcon key={info._id} className="text-white h-3 w-3" />
                          </Link>
                        </td>
                      </tr>
                    </>
                  ))
              }
            </tbody>
          </table>
        </div>
        <div
          className="overflow-scroll bg-white border-[1px] dark:border-none border-gray-100 dark:bg-slate-800 hover:shadow-2xl hover:shadow-slate-800/10  min-w-[400px] h-[480px] rounded-lg"
          style={{ display: isbox[0] ? "" : "none" }}
          >
          <div className=" relative flex flex-col">
          <h1 className="absolute top-6 left-5 text-lg font-semibold text-gray-700 dark:text-white">{isbox[1]}</h1>
            <div
              onClick={() => setbox([false,isbox[0]])}
              className=" absolute flex justify-center right-5 top-3 h-10 w-10 rounded-full hover:text-white hover:bg-primary/75 items-center  duration-300 my-2"
            >
              <XMarkIcon className="h-5 w-5 dark:text-white" />
            </div>
            <div className="absolute top-20 m-5 pb-10">
              <Routes>
                <Route path="/new" element={<New/>} />
                <Route path="/edit/:pid" element={<Edit/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit fixed bottom-11 ">
        <Link
          to={"new"}
          className=" w-[87vw]  flex items-center justify-center h-10 bg-primary/80 duration-700 hover:bg-primary rounded-lg cursor-pointer text-white"
          onClick={() => {
            setbox([true,"New"]);
          }}
        >
          Add New Product
        </Link>
      </div>
    </>
  );
};

export default Table;
