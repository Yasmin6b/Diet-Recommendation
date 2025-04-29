/*
import { BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Recipe from "./Pages/Recipe";
import ProfilePage from "./Pages/ProfilePage";
import About from "./Pages/About";
import HelloWorld from "./components/HelloWorld"; 

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/recipe" element={<Recipe/>} />
      </Routes>
    </Router>


    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
 */

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUpPage'
import AboutUsPage from './pages/AboutUs'
import WelcomePage from './pages/WelcomePage'
import DashboardLayout1 from './pages/DashboardLayout1'
import ProfilePage from './pages/ProfilePage'
import HelloPage from './pages/HelloPage'
import RecipePage from './pages/Recipe'
import ProgressTracking from './pages/ProgressTracking'
import CreateProgram from './pages/CreateProgram'
import DashboardLayout2 from './pages/DashboardLayout2'
import Members from './pages/Members'
import Requests from './pages/Requests'
import Overview from './pages/Overview'
import Blogs from './pages/Blogs'
import AddRecipe from './pages/AddRecipe'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/About-us" element={<AboutUsPage />} />
        <Route path="/sign-up/welcome" element={<WelcomePage />} />
        <Route path="/userdashboard" element={<DashboardLayout1 />}>
          <Route index element={<HelloPage />} />
          <Route path="dashboard/Home" element={<HelloPage />} />
          <Route path="dashboard/profile" element={<ProfilePage />} />
          <Route path="dashboard/recipes" element={<RecipePage />} />
          <Route path="dashboard/progress-tracking" element={<ProgressTracking />} />
          <Route path="create-program" element={<CreateProgram />} />
        </Route>
        <Route path="/admindashboard" element={<DashboardLayout2 />}>
          <Route path="members" element={<Members />} />
          <Route path="requests" element={< Requests/>} />
          <Route path="overview" element={<Overview />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="addrecipe" element={<AddRecipe />} />
        </Route>
     </Routes>
    </Router>
  )
}

export default App