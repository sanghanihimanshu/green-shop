import { BanknotesIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { local } from "../../../../../utils/utils";

const Productpage = () => {
  const { id } = useParams();
  const navigateto = useNavigate()
  const [condition, setcondition] = useState(false);
  const [data, setproduct] = useState({
    name: "",
    img: "",
    description: "",
    status: "",
    lastbid: "",
    basePrice: "",
    lastbider:"",
    Quantity:0
  });
  useEffect(() => {
    fetch("https://green-shop-api-mysoaceh-gmailcom-himanshu-s-projects.vercel.app/crops/product/" + id, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setproduct({
          name: data.name,
          img: data.img,
          description: data.description,
          status: data.status,
          lastbid: data.lastbid,
          basePrice: data.basePrice,
          lastbider:data.lastbider,
          Quantity:data.Quantity
        });
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);
  const amountupdate = useMutation(async () => {
    return await axios
      .post("https://green-shop-api-mysoaceh-gmailcom-himanshu-s-projects.vercel.app/crops/makebid", {
        id: id,
        amount: data.lastbid,
        email: local.getItem('email')
      })
      .then(async (data) => {
        setproduct({
          name: data.name,
          img: data.img,
          description: data.description,
          status: data.status,
          lastbid: data.lastbid,
          basePrice: data.basePrice,
          lastbider:data.lastbider,
          Quantity:data.Quantity
        });
        return data.data;
      })
      .catch((error) => {
        alert(error);
      });
  });
  const handlechange = (e, value) => {
    setproduct({ ...data, [e.target.name]: value });
    if (value > data.lastbid && value > data.basePrice) {
      setcondition(true);
    } else {
      setcondition(false);
    }
  };
  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-full rounded-lg"
            alt="image of a girl posing"
            src={data.img}
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="pb-6">
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {data.name}
            </h1>
          </div>
          <input
            type="tel"
            name="lastbid"
            value={data.lastbid}
            onChange={(e) => {
              handlechange(e, e.target.value);
            }}
            className="mb-8 dark:bg-white rounded-xl dark:text-gray-900  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center p-5 leading-none text-white bg-gray-800 w-full py-4 focus:outline-none"
            placeholder="Amount"
          />
          <button
            onClick={() => {
              alert("it cant be revart")
              amountupdate.mutate();
              setcondition(false)
              navigateto("/dashboard/orders")
            }}
            disabled={condition ? false : true}
            className="dark:bg-white rounded-xl dark:text-gray-900 dark:hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none"
          >
            <BanknotesIcon className="mr-3 text-white dark:text-gray-900 h-6 w-6" />
            Add Your Bid
          </button>
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
              {data.description}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
              data Code: {id}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Quantity: {data.Quantity}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Last Bid: {data.lastbid}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Base Price: {data.basePrice}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Last Bider: {data.lastbider}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productpage;
