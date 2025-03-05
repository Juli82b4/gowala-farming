import { useState } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { useRoutes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/products", element: <ProductsPage /> },
  ]);
  return (
    <div className="app">
      <div className="main">{routes}</div>
    </div>
  );
}

export default App;
