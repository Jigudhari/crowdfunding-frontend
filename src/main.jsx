import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from"./pages/HomePage.jsx";
import ProjectPage from"./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import CreateProjectPage from './pages/CreateProjectPage.jsx';
import { AuthProvider } from "./components/AuthProvider.jsx";
import CreatePledgePage from "./pages/CreatePledgePage.jsx";

import NavBar from"./components/NavBar.jsx";

const router =createBrowserRouter([
  {
    path:"/",
    element:<NavBar />,
    children: [
      {path:"/", element: <HomePage /> },
      {path: "/login", element: <LoginPage /> },
      {path:"/launchproject",element:<CreateProjectPage/> },
      {path:"/project/:id", element: <ProjectPage /> },
      {path:"/createpledge", element: <CreatePledgePage />},
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