const { createBrowserRouter } = require("react-router");
const { default: Root } = require("../Root/Root");

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root
    }
])
export default router