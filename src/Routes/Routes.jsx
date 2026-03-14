import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import About from "../Components/About/About";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {index:true,Component:About},
            {}
        ]
    }
])
export default router