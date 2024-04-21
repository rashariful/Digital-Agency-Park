import About from "../Components/Pages/Home/About/About";
import Blog from "../Components/Pages/Home/Blog/Blog";
import Contact from "../Components/Pages/Home/Contact/Contact";
import Details from "../Components/Pages/Home/Home/Details/Details";
import Press from "../Components/Pages/Home/Home/Press/Press";
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
                path: "/details/:id",
                element: <Details/> , 
                loader: async ({ params }) => {
                    return fetch(`https://portfolio-server-hazel.vercel.app/api/v1/project/${params?.id}`);
                  },
                
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
            {
                path: "/press",
                element: <Press/>
            },
        ]
    }
])

export default router