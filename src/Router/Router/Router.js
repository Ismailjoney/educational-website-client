import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Courses from "../../Pages/Pages/Courses/Courses/Courses";
import Home from "../../Pages/Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/course',
                element:<Courses></Courses>
            }

        ]
    }
])