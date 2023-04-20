import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../src/css/style.css'
import LoginPage from "./components/LoginPage";
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <HomePage />,
  },
]);

function App({ signOut }) {

  return (
    <RouterProvider router={router} />
  );
}

export default App;