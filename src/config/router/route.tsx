import {
    createBrowserRouter
} from "react-router-dom";
import Page from "@page/Page.tsx";
import React from "react";
import ErrorPage from "@config/404/error-page.tsx";
import {Counter} from "@example/examplePage.tsx";

export const router_root = createBrowserRouter([
    {
        path: "/",
        element: <Page />,
        errorElement: <ErrorPage />,
    },
    {
        path: "dashboard",
        element: <div>Dashboard...</div>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "firs",
                element: <div>First...</div>,
            },
        ],
    },
    {
        path: "/example",
        element: <Counter />,
        errorElement: <ErrorPage />,
    },
]);