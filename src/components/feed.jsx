import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../constants/appConstants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/slice/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();
    const fetchFeed = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/feed", {
                withCredentials: true,
            });

            dispatch(addFeed(res.data));
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchFeed();
    }, []);

    return (
        <div>
            <UserCard user={feed?.feed[0]} />
        </div>
    );
};

export default Feed;
