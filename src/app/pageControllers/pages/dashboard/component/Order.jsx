// import { ArchiveBoxArrowDownIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { local } from "../../../../../utils/utils";
import { useState } from "react";

const Order = () => {
  const [tabledata,settabledata]=useState()
  useQuery(["cardsorder"],
    async () => {
      return await axios.post(import.meta.env.VITE_URL_API+"/crops/order", {
          email: local.getItem("email"),
        }).then((res) => {
          settabledata(res.data)
        })
        .catch((error) => {
          alert(error);
        });
      },{
        enabled:true
      }
  );
  return (
    <>
      <div className=" overflow-scroll bg-white border-[1px] dark:border-none border-gray-100 dark:bg-slate-800 hover:shadow-2xl hover:shadow-slate-800/10  w-[88vw] h-[75vh] rounded-lg">
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
                      </tr>
                    </>
                  ))
              }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
