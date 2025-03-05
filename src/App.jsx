import { useState } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/", element: <MainPage /> },
  ]);
  return (
    <div className="app">
      <div className="main">{routes}</div>
    </div>
  );
}

export default App;
