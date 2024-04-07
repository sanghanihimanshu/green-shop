/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { sidebox, table } from "../../../../../utils/atoms";
import { useAtom } from "jotai";

const Edit = () => {
  const { pid } = useParams();
  const [tabledata, settabledata] = useAtom(table);
  const [isbox, setbox] = useAtom(sidebox);
  const carddelete = useMutation(
    async () => {
      return await axios
        .post(import.meta.env.VITE_URL_API+"/crops/remove", { pid: pid })
        .then((res) => {
          const newdata = tabledata.filter((item) => item._id != res.data._id);
          settabledata(newdata);
          return res.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
    {
      onSuccess: () => {
        setbox([false, isbox[1]]);
      },
    }
  );

  const [isdata, setdata] = useState({
    name: "",
    img: "",
    description: "",
    status: "",
    basePrice: "",
    pid: pid,
  });

  useEffect(() => {
    fetch(import.meta.env.VITE_URL_API+"/crops/user/" + pid, {
      method: "POST",
      body: JSON.stringify({
        email: window.localStorage.getItem("email"),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setdata({
          name: data.name,
          img: "",
          description: data.description,
          status: data.status,
          basePrice: data.basePrice,
          pid: pid,
        });
      })
      .catch((error) => console.error("Error:", error));
  }, [pid]);

  const cardupdate = useMutation(
    async () => {
      return await axios
        .post(import.meta.env.VITE_URL_API+"/crops/update", isdata)
        .then(async (res) => {
          tabledata.forEach((item, index, arr) => {
            if (tabledata[index]._id == res.data._id) {
              console.log(tabledata[index].id);
              tabledata[index] = res.data;
            }
          });
          return res.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
    {
      onSuccess: () => [setbox([false, isbox[1]])],
    }
  );
  const handlechange = (e) => {
    setdata({ ...isdata, [e.target.name]: e.target.value });
  };

  return (
    <div className=" overflow-scroll items-center space-y-6 w-[350px]">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={isdata.name}
            onChange={(e) => handlechange(e)}
            className="block p-4 pb-2 w-full  rounded-full border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6text-gray-700 dark:text-gray-300"
        >
          Description
        </label>
        <div className="mt-2">
          <input
            id="description"
            name="description"
            type="text"
            autoComplete="description"
            required
            value={isdata.description}
            onChange={(e) => handlechange(e)}
            className="block p-4 pb-2 w-full  rounded-full border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="basePrice"
          className="block text-sm font-medium leading-6text-gray-700 dark:text-gray-300"
        >
          BasePrice
        </label>
        <div className="mt-2">
          <input
            id="basePrice"
            name="basePrice"
            type="tel"
            autoComplete="basePrice"
            required
            value={isdata.basePrice}
            onChange={(e) => handlechange(e)}
            className="block p-4 pb-2 w-full  rounded-full border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium leading-6text-gray-700 dark:text-gray-300"
        >
          Status
        </label>
        <div className="mt-2">
          <select
            id="status"
            name="status"
            autoComplete="status"
            required
            value={isdata.status}
            onChange={(e) => handlechange(e)}
            className="block p-5 pb-2 w-full  rounded-full border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="sell" className="dark:text-black">
              Sell
            </option>
            <option value="bid" className="dark:text-black">
              Add to Bid
            </option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="img"
          className="block text-sm font-medium leading-6text-gray-700 dark:text-gray-300"
        >
          Product Image
        </label>
        <div className="mt-2">
          <input
            id="img"
            name="img"
            type="file"
            autoComplete="img"
            required
            value={isdata.img}
            onChange={(e) => handlechange(e)}
            className="block p-4 pb-2 w-full  rounded-full border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            cardupdate.mutate();
          }}
          disabled={cardupdate.status == "loading" ? true : false}
          className={`flex w-full justify-center rounded-full ${
            cardupdate.status == "loading" ? "bg-black" : ""
          }my-5 bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm duration-[0.5s] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          Update
        </button>
        <button
          onClick={() => {
            carddelete.mutate();
          }}
          disabled={carddelete.status == "loading" ? true : false}
          className={`flex w-full justify-center rounded-full ${
            carddelete.status == "loading" ? "bg-black" : ""
          } bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm duration-[0.5s] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Edit;
