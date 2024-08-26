import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

var root = ReactDOM.createRoot(document.getElementById("root"));

var head = <h1>React</h1>;

root.render(head);

const AppLayOut = () => {
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
};

root.render(<AppLayOut />)