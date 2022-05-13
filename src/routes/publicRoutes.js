import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import Home from '../pages/Home/Home'

export const publicRoutes = [
    {
        path: '/',
        name: 'home',
        Component: Home
    },
    {
        path: '/services',
        name: 'service',
        Component: Services
    },
    {
        path: '/contact',
        name: 'contact',
        Component: Contact
    },
    {
        path: '/about',
        name: 'about',
        Component: About
    },
    {
        path: '/login',
        name: 'login',
        Component: Login
    },
]