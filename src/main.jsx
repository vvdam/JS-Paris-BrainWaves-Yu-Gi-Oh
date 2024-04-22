import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CardList from "./pages/CardList.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <CardList />,
                loader: () =>
                    fetch(
                        "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0"
                    ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
