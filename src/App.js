import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

var root = ReactDOM.createRoot(document.getElementById("root"));

//var head = <h1>React</h1>;
//root.render(head);

const AppLayout = () => {
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout />,
            children:[
                {
                    path:"/home",
                    element:<Body />,
                },
                {
                    path:"/about",
                    element:<About />,
                },
                {
                    path:"/contact",
                    element:<Contact />,
                }
            ],
            errorElement: <Error />,
        }
    ]
);

root.render(<RouterProvider router={appRouter} />);