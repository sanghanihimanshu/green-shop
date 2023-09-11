
import {Route, Routes } from "react-router";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";

const PageController = () => {
  return (
    <>
      <AppHeader />
      <div className="space-y-40 mb-40">
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="learnmore" element={<LearnMore/>}/>
        
      </Routes>
      </div>
      <AppFooter />
    </>
  );
};

export default PageController;
