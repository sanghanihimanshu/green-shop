import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { local } from "../../../../../utils/utils";
import { useAtom } from "jotai";
import { sidebox, table } from "../../../../../utils/atoms";
export const New = () => {
  const tabledata = useAtom(table)[0];
  const [isdata, setdata] = useState({
    name: "",
    img: '',
    description: "",
    status: "sell",
    basePrice: "",
    Quantity:0
  });
  const [file, setFile] = useState();
  const [isbox, setbox] = useAtom(sidebox);
  const cardcreate = useMutation(
    async () => {

        const formData = new FormData();
        formData.append("image", file);
        formData.append("name", isdata.name);
        formData.append("img", isdata.img);
        formData.append("description", isdata.description);
        formData.append("status", isdata.status);
        formData.append("basePrice", isdata.basePrice);
        formData.append("email", local.getItem("email"));
        formData.append("Quantity",isdata.Quantity);
        
      return await axios
        .post("https://green-shop-api-mysoaceh-gmailcom-himanshu-s-projects.vercel.app/crops/new",formData,
        {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          tabledata.push(res.data);
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
  const handlechange = (e,value) => {
    setdata({ ...isdata, [e.target.name]: value });
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
            onChange={(e) => handlechange(e,e.target.value)}
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
            onChange={(e) => handlechange(e,e.target.value)}
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
            onChange={(e) => handlechange(e,e.target.value)}
            className="block p-4 pb-2 w-full  rounded-full border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="Quantity"
          className="block text-sm font-medium leading-6text-gray-700 dark:text-gray-300"
        >
          Quantity
        </label>
        <div className="mt-2">
          <input
            id="Quantity"
            name="Quantity"
            type="tel"
            autoComplete="Quantity"
            required
            value={isdata.Quantity}
            onChange={(e) => handlechange(e,e.target.value)}
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
            onChange={(e) => handlechange(e,e.target.value)}
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
            onChange={(e) => {
              handlechange(e,e.target.value);
              setFile(e.target.files[0])
            }}
            className="block p-4 pb-2 w-full  rounded-full border-0 py-1.5 dark:text-white dark:bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            cardcreate.mutate();
          }}
          disabled={cardcreate.status == "loading" ? true : false}
          className={`flex w-full justify-center rounded-full ${
            cardcreate.status == "loading" ? "bg-black" : ""
          }my-5 bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm duration-[0.5s] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          Save
        </button>
      </div>
    </div>
  );
};
