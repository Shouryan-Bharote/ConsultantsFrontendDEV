import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";
import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <div className="">
        {/* <Navbar /> */}
        <main className="flex-grow">
          <AppRoutes />
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

