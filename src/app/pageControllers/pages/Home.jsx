import Features from "../../components/AppFeatures";
import HeroSection from "../../components/HeroSection";
import Stats from "../../components/Stats";
import Testimonials from "../../components/Testimonials";
import CallToAction from "../../components/CallToAction";
import Blog from "../../components/Blog";
import { Navigate, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { logdin } from "../../../utils/atoms";
import { useMutation } from "react-query";
import axois from 'axios'
import { local } from "../../../utils/utils";
import { useEffect } from "react";
const Home = () => {
  const [islogin,setlogin] = useAtom(logdin)
  const navigate = useNavigate()
  const mutation = useMutation(
    async () => {
      return await axois
        .post("http://localhost:4000/auth/login",{},{headers:{"acesstoken":local.getItem("acesstoken")}})
        .then((res) => {
          window.localStorage.setItem("auth",res.data.auth)
          window.localStorage.setItem("email",res.data.email)
          window.localStorage.setItem("acesstoken",res.data.acesstoken)
          setlogin(local.getItem("auth"))
          return res.data;
        });
    },
    {
      onSuccess: () => {
        return navigate("/dashboard/shop")
      },
    }
  );
  useEffect(()=>{
    if (local.getItem("acesstoken")!=null) {
      mutation.mutate()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if (islogin=='true') {
    return <Navigate to={'dashboard/shop'}/>
  }else{
  return (
    <>
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </>
  )}
};

export default Home;
