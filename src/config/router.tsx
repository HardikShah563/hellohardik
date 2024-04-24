import { createBrowserRouter } from "react-router-dom";
// importing components
import Navbar from "../components/Navbar";
// importing pages
import Home from "../pages/Home";
import Experiences from "../pages/Experiences";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/experience",
                element: <Experiences />
            },
            {
                path: "/projects",
                element: <Projects />
            }
        ]
    }
]);

export default router;