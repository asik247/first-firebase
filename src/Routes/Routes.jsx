import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import About from "../Components/About/About";
import LogIn from "../Components/Login/LogIn";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {index:true,Component:Home},
            {path:'about',Component:About},
            {path:'login',Component:LogIn}
        ]
    }
])
export default router