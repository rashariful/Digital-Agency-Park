const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Pages/Home/Home/Home");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
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
                path: "/",
                element: <Home/>
            },
        ]
    }
])

export default router