
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import Home from "./pages/Home";

const PageController = () => {
  return (
    <>
      <AppHeader />
      <div className="space-y-40 mb-40">
      <Home/>
      </div>
      <AppFooter />
    </>
  );
};

export default PageController;
