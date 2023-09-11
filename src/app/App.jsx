import { Route, Routes } from "react-router";
import "../App.css";
import PageController from "./pageControllers/PageController";
import Dashboard from './pageControllers/pages/Dashboard'
function App() {
  return (
        <Routes > 
          <Route path="/*" element={<PageController/>}/>
          <Route path="dashboard/*" element={<Dashboard/>}/>
        </Routes>
  );
}

export default App;
