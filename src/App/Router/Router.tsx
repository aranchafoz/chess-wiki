import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

export const Router = ({ children }: { children: React.ReactNode }) => {
  const router = createBrowserRouter(createRoutesFromElements(children));

  return <RouterProvider router={router} />;
};
