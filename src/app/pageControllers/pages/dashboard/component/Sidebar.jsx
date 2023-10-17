import { Link } from "react-router-dom";
import { BuildingStorefrontIcon ,ShoppingBagIcon,ClipboardDocumentCheckIcon} from '@heroicons/react/24/solid'
const Sidebar = () => {
  return (
    <div className="flex flex-col h-fit items-center justify-between w-10">
      <div className="flex flex-col items-center justify-center">
        <Link to='/dashboard/shop' aria-label="logo" className="flex space-x-2 items-center  mt-3">
          <div aria-hidden="true" className="flex space-x-1">
            <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
            <div className="h-6 w-2 bg-primary"></div>
          </div>
        </Link>
        <div className="flex flex-col mt-10">
          <Link to="shop" className="h-10 w-10 rounded-full hover:text-white hover:bg-primary/75 flex items-center justify-center duration-300 my-2">
                <BuildingStorefrontIcon className="h-5 w-5 dark:text-white"/>
          </Link>
          <Link to="listed-product" className="h-10 w-10 rounded-full hover:text-white hover:bg-primary/75 flex items-center justify-center duration-300 my-2">
                <ShoppingBagIcon className="h-5 w-5 dark:text-white" />
          </Link>
          <Link to="orders" className="h-10 w-10 rounded-full hover:text-white hover:bg-primary/75 flex items-center justify-center duration-300 my-2">
                <ClipboardDocumentCheckIcon className="h-5 w-5 dark:text-white "/>
          </Link>
        </div>
      </div>
      <Link to="profile-setting" className="h-9 w-9 mt-[340px] hover:border-primary hover:border-solid border-2 duration-300 rounded-full flex  items-center justify-center">
        <img className="h-7 w-7 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="avtar"/>
      </Link>
    </div>
  );
};

export default Sidebar;
