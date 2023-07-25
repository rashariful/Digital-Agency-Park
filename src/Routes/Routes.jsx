import About from "../Components/Pages/Home/About/About";
import Blog from "../Components/Pages/Home/Blog/Blog";
import Contact from "../Components/Pages/Home/Contact/Contact";
import NotFound from "../Components/Pages/Home/NotFound/NotFound";
import Services from "../Components/Pages/Home/Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Pages/Home/Home/Home");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <NotFound/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path: "/about-us",
                element: <About/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/contact-us",
                element: <Contact/>
            },
        ]
    }
])

export default router