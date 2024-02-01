import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Courses from "../components/Courses/Courses";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CheckOut from "../components/CheckOut/CheckOut";
import Profile from "../components/Profile/Profile";
import SecretRoute from "./SecretRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: async () => {
                    const response = await fetch('courses.json');
                    const data = await response.json();
                    return data;
                },
            },
            {
                path: '/checkout/:id',
                element:<SecretRoute><CheckOut></CheckOut></SecretRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element:<Profile></Profile>
            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])