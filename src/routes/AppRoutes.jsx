import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePageConsultants.jsx";
// import Courses from "../pages/CoursesPageConsultants.jsx";
// import Trainers from "../pages/TrainerProfileConsultants.jsx";

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/courses" element={<Courses />} />
      <Route path="/trainers" element={<Trainers />} /> */}
    </Routes>
  ); 
};

export default AppRoutes;