import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import React from 'react';


export const App = () => {
 
  return (
    <>
 
      <RouterProvider router={route} />
    </>
  );
};
