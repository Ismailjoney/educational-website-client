import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/blog/Blog";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/Login/Login";
import Reg from "../../Pages/Login/Reg";
import Courses from "../../Pages/Pages/Courses/Courses/Courses";
import PrimiumCourseDetails from "../../Pages/Pages/Courses/UniqueCourseDetails/PrimiumCourseDetails";
import UniqueCourseDetails from "../../Pages/Pages/Courses/UniqueCourseDetails/UniqueCourseDetails";
import Home from "../../Pages/Pages/Home/Home";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Courses></Courses>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path: '/uniquequersdetails/:id',
                element: <PrivetRoute><UniqueCourseDetails></UniqueCourseDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://educational-website-server-azure.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Reg></Reg>
            },
            {
                path: '/primiumCoursedetails',
                element: <PrimiumCourseDetails></PrimiumCourseDetails>
            }

        ]
    }
])

//https://educational-website-server-azure.vercel.app/