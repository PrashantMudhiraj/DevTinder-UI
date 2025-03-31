import { Outlet, useNavigate } from "react-router";

import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../constants/appConstants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slice/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true,
            });

            dispatch(addUser(res.data));
        } catch (error) {
            if (error.status === 401) {
                navigate("/login");
            }
            console.log(error.message);
        }
    };

    useEffect(() => {
        console.log("rendered....");
        if (!userData) {
            fetchUser();
        }
    }, []);

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Body;
