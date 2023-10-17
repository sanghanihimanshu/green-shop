import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="flex items-baseline justify-between w-full">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
        Shop
      </h3>
      <form className="flex items-center justify-center gap-3">
        <input type="text" name="search" className="h-10 bg-transparent outline-none border-primary border-[1px] rounded-lg p-5 dark:text-white dark:placeholder-white animeted-input"  placeholder="Search"/>
        <div className="flex items-center justify-center h-10 w-10 bg-primary/80 duration-700 hover:bg-primary rounded-lg cursor-pointer">
            <MagnifyingGlassIcon className="h-6 w-6 text-white"/>
        </div>
      </form>
    </div>
  );
};

export default Search;
