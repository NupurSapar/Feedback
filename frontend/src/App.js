import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import StudentDashboard from "./StudentDashboard";
import LandingPage from "./LandingPage";
import TeacherProfile from './TeacherProfile';
import PastForms from "./PastForms";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<Dashboard />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
        <Route path="/pastforms" element={<PastForms/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;
