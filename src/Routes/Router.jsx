import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Packages from "../Page/Packages/Packages";
import Login from "../Page/Authentication/Login";
import SignUp from "../Page/Authentication/SignUp";
import TravelForm from "../Page/TravelForm/TravelForm";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Page/Contact";
import MyBooking from "../Page/MyBokking/MyBooking";

const router = createBrowserRouter([{
path:"/",
element:<Main></Main>,
children:[{
    path:"/",
    element:<Home></Home>,
},
{
    path:"/package",
    element:<Packages></Packages>
},
{
    path:"/login",
    element:<Login></Login>
},
{
    path:"/signUp",
    element:<SignUp></SignUp>
},

{
    path:"/travelForm",
    element:<TravelForm></TravelForm>
},

{
    path:"/contact",
    element:<Contact></Contact>
},
{
    path:"/booking",
    element:<MyBooking></MyBooking>
},


]
}])
export default router