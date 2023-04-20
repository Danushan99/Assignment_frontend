/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Home";
import NewProduct from "./newProduct";

function App() {

  return (
    <div className="App">
      // TODO: Modify this react router dom accoding to V6
      {/* <NewProduct /> */}
      <HomeScreen />
      {/* <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="NewProduct" element={<NewProduct />} />
      </Routes> */}
    </div>
  );
}

export default App;
