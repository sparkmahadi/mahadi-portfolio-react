import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Projects/Projects";
import Contact from './../pages/Contact/Contact';
import Resume from './../pages/Resume/Resume';
import About from './../pages/About/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])

export default router;