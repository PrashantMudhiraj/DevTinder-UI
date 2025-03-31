import axios from "axios";
import { BASE_URL } from "../constants/appConstants";
import { useEffect, useState } from "react";

const Requests = () => {
    const [request, setRequests] = useState([]);
    const getRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            });
            console.log(res.data.data);
            setRequests(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const reviewRequests = async (status, id) => {
        try {
            await axios.post(
                BASE_URL + "/request/review/" + status + "/" + id,
                {},
                { withCredentials: true }
            );
            console.log(request);
            const filteredRequest = request.filter((req) => req._id !== id);
            setRequests(filteredRequest);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getRequests();
    }, []);

    return (
        <>
            <h1>Requests</h1>
            {request.map((conn) => {
                console.log(conn);
                const { photoUrl, firstName } = conn.fromUserId;
                const { _id } = conn;
                return (
                    <div
                        className="flex w-[400px] h-20 bg-base-300 m-auto my-2 items-center"
                        key={_id}
                    >
                        <img
                            src={photoUrl}
                            alt=""
                            className="w-14 rounded-lg mx-2 my-2"
                        />
                        <h1 className="ml-22">{firstName}</h1>

                        <div className="flex justify-around items-center ml-20">
                            <button
                                className="btn btn-primary mx-2"
                                onClick={() => {
                                    reviewRequests("accepted", _id);
                                }}
                            >
                                Accept
                            </button>
                            <button
                                className="btn btn-secondary mx-2 "
                                onClick={() => reviewRequests("rejected", _id)}
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Requests;
