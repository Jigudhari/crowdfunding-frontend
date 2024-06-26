import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from"./pages/HomePage.jsx";
import ProjectPage from"./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import CreateProjectPage from './pages/CreateProjectPage.jsx';
import { AuthProvider } from "./components/AuthProvider.jsx";
import CreatePledgePage from "./pages/CreatePledgePage.jsx";
// import AboutPage from "./pages/AboutPage.jsx";

import NavBar from"./components/NavBar.jsx";
import UpdateProjectForm from './components/UpdateProject.jsx';

const router =createBrowserRouter([
  {
    path:"/",
    element:<NavBar />,
    children: [
      {path:"/", element: <HomePage /> },
      {path: "/login", element: <LoginPage /> },
      {path: "/Register", element: <RegisterPage /> },
      {path:"/launchproject",element:<CreateProjectPage/> },
      {path:"/project/:id", element: <ProjectPage /> },
      {path:"/createpledge", element: <CreatePledgePage /> },
      {path:"/updateproject/:id", element: <UpdateProjectForm /> },
      // {path:"/about", element: <AboutPage /> }
    ],
      },
    ]);
    
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      {/* Here we wrap our app in the router provider so they render */}
        
      </React.StrictMode>
  );