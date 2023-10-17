import { PencilIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <>
      <div className=" overflow-scroll bg-white border-[1px] dark:border-none border-gray-100 dark:bg-slate-800 hover:shadow-2xl hover:shadow-slate-800/10  w-[88vw] h-[480px] rounded-lg">
        <table className=" w-[97%] m-4 text-white text-xs ">
          <thead>
            <tr className="text-start border-b-2 border-gray-800">
              <th className="text-start px-4 py-2 font-semibold">Pid</th>
              <th className="text-start px-4 py-2 font-semibold">Name</th>
              <th className="text-start px-4 py-2 font-semibold">
                Discription
              </th>
              <th className="text-start px-4 py-2 font-semibold">Date</th>
              <th className="text-start px-4 py-2 font-semibold">Status</th>
              <th className="text-start px-4 py-2 font-semibold">Base Price</th>
              <th className="text-start px-4 py-2 font-semibold">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2"><Link to={""}>53463575685373</Link></td>
              <td className="px-4 py-2">Row 1, Cell 2</td>
              <td className="px-4 py-2">Row 1, Cell 3</td>
              <td className="px-4 py-2">Row 1, Cell 3</td>
              <td className="px-4 py-2">Row 1, Cell 3</td>
              <td className="px-4 py-2">Row 1, Cell 3</td>
              <td className="px-4 py-2"><button className="flex items-center justify-center p-3 p bg-primary/80 duration-700 hover:bg-primary rounded-lg cursor-pointer text-white">
         <PencilIcon className="text-white h-3 w-3"/>
        </button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-fit fixed bottom-11 ">
        <button className=" w-[88vw]  flex items-center justify-center h-10 bg-primary/80 duration-700 hover:bg-primary rounded-lg cursor-pointer text-white">
          Add New Product
        </button>
      </div>
    </>
  );
};

export default Table;
