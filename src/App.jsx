import { useState } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { useRoutes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ServiceArticlePage from "./Pages/ServiceArticlePage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/shop", element: <ProductsPage /> },
    { path: "/services", element: <ServiceArticlePage /> },
  ]);
  return (
    <div className="app">
      <div className="main">{routes}</div>
    </div>
  );
}

export default App;
