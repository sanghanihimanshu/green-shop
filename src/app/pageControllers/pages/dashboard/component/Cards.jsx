/* eslint-disable react/prop-types */
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Badge from "./Badge";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className="group relative items-center bg-white border-[1px] dark:border-none border-gray-100 dark:bg-slate-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-slate-800/10 w-80 h-[480px] rounded-lg">
      <div className="relative space-y-8 py-12 p-8">
        <img
          src={props.img}
          className="w-full h-52 rounded-lg aspect-auto"
          alt="product"
        />

        <div className="space-y-2">
          <div className="flex space-x-2 items-center justify-start">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary">
              {props.name}
            </h5>
            <Badge data={props.status}/>
          </div>

          <p className="text-gray-600 dark:text-gray-300">
            {props.discription}
          </p>
        </div>
        <Link to={props.id}
          className="flex items-center justify-between dark:text-white group-hover:text-primary"
        >
          <span className="text-sm ">Read more</span>
          <ArrowRightIcon className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </Link>
      </div>
    </div>
  );
};

export default Cards;
