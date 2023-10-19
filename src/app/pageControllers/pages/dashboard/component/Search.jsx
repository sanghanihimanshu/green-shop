/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { useLocation } from "react-router-dom";
import { table } from "../../../../../utils/atoms";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { local } from "../../../../../utils/utils";

const Search = (props) => {
  const tabname = useLocation();
  const settabledat = useAtom(props.section)[1];
  const [searchinput, setsearchinput] = useState("");
  const Handlesearch = useMutation(async () => {
    return await axios
      .post(
        `http://localhost:4000/crops/search?searchquery=` + searchinput,
        tabname.pathname.split("/")[2] != "shop"
          ? {
              email: local.getItem("email"),
            }
          : {}
      )
      .then((res) => {
        settabledat(res.data);
        setsearchinput("");
        console.log(!searchinput);
        return res.data;
      })
      .catch((error) => {
        alert(error);
      });
  });

  const handlsearch = (e) => {
    setsearchinput(e.target.value);
  };
  return (
    <div className="flex items-baseline justify-between w-full">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
        {tabname.pathname.split("/")[2]}
      </h3>
      <form className="flex items-center justify-center gap-3">
        <input
          value={searchinput}
          onChange={(e) => handlsearch(e)}
          type="text"
          name="search"
          className="h-10 w-44 lg:w-50 md:w-50  bg-transparent outline-none border-primary border-[1px] rounded-lg p-5 dark:text-white dark:placeholder-white animeted-input"
          placeholder="Search"
        />
        <div
          onClick={() => {
            Handlesearch.mutate();
            
          }}
          disabled={(!searchinput)? true : false}
          className="flex items-center justify-center h-10 w-10 bg-primary/80 duration-700 hover:bg-primary rounded-lg cursor-pointer"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-white" />
        </div>
      </form>
    </div>
  );
};

export default Search;
