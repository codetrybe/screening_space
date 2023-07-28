import { Route, Routes  } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignupPage from "../pages/SignupPage";
import AllNotesPage from "../pages/AllnotesPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";


export default function AllRoutes(){

    return <Routes>
        <Route path="/" element={ <Homepage/> }></Route>
        <Route path="/register" element={ <SignupPage/> }></Route>
        <Route path="/login" element={ < LoginPage/> }></Route>
        <Route path="/notes" element={ <PrivateRoute><AllNotesPage /></PrivateRoute>}></Route>

    </Routes>
}