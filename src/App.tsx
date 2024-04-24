// importing from react
import { RouterProvider } from "react-router-dom";
// importing components
import Cursor from "./components/Cursor";
import Parallax from "./components/Parallax";
import router from "./config/router";

export default function App() {
    return (
        <>
            <Cursor />
            <Parallax />

            <section className="wrapper main" id="main">
                <div className="box">
                    <div className="left-border"></div>
                    <div className="right-border"></div>
                    <div id="home"></div>

                    {/* allowing different pages to render */}
                    <RouterProvider router={router} />
                </div>
            </section>
        </>
    );
};