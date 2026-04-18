import React from "react";
import { Login } from "../components/Login";
import { TimeLine } from "../components/TimeLine";
import './../styles/mainview.css'
import { Nav } from "../components/Nav";

const MainView = () => {
    return (
        <>
            <Nav />
            <div className="main-view__content-container">
                <Login />
                <TimeLine />
            </div>
        </>
    )
}

export { MainView }