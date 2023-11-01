import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Profile = () => {
    const {uid}=useParams()
    const [profile ,setprofile]=useState({})
   useQuery(["profile"],
    async () => {
      return await axios.get("https://green-shop-api-mysoaceh-gmailcom-himanshu-s-projects.vercel.app/auth/profile/"+uid).then((res) => {
        setprofile(res.data)
          return res.data;
        })
        .catch((error) => {
          alert(error);
        });
      }
  );

  return (
    <div className="w-full h-[80vh] flex justify-center">
      <div
        id="profile"
        className="h-80 bg-white border-[1px] dark:border-none border-gray-100 dark:bg-slate-800 hover:shadow-2xl hover:shadow-slate-800/10 rounded-lg"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0 dark:text-white">{profile.name}</h1>
          <div className=" mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <p className="mt-5 pt-2 text-xs lg:text-sm flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300">
          <PhoneIcon className="h-4 fill-current text-purple-700 pr-4"/>
           {" "}
            Contect No- {profile.contact}
          </p>

          <div className="pt-12 pb-8">
            <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full w-full flex items-center" onClick={()=>{window.location="https://mail.google.com/mail/?view=cm&fs=1&to="+profile.email}}>
              <EnvelopeIcon className="h-4 fill-current text-whitepr-4 m-3"/><span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
