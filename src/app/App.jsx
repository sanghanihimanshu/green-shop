import { Route, Routes } from "react-router";
import "../App.css";
import PageController from "./pageControllers/PageController";
import Dashboard from './pageControllers/pages/Dashboard'
import AuthpageController from "./pageControllers/pages/AuthpageController";
function App() {
  return (
        <Routes > 
          <Route path="/*" element={<PageController/>}/>
          <Route path="dashboard/*" element={<Dashboard/>}/>
          <Route path="auth/*" element={<AuthpageController/>}/>
        </Routes>
  );
}

export default App;
