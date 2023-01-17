import React, { useState } from "react";
// import { Route, Router, Routes } from "react-router-dom";
// import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export default function AppRouter() {
  const [isLogin, setIsLogin] = useState(false);

  const router = createBrowserRouter([
    { path: "/", element: isLogin ? <Home /> : <Auth /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
  // <Router>
  //   <Routes>
  //     {isLogin ? (
  //       <>
  //         <Route path="/" element={<Home />} />
  //       </>
  //     ) : (
  //       <Route path="/" element={<Auth />} />
  //     )}
  //   </Routes>
  // </Router>
}
