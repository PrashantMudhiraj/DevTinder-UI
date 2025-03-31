import axios from "axios";
import { BASE_URL } from "../constants/appConstants";
import { useEffect, useState } from "react";

const Connections = () => {
    const [connection, setConnection] = useState([]);
    const connectionRequest = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true,
            });
            setConnection(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        connectionRequest();
    }, []);
    // if (!connections && connections.length === 0) return <h1>Loading ....</h1>;
    return (
        <>
            <h1>Connections</h1>
            {connection.map((conn) => {
                return (
                    <div
                        className="flex w-1/3 h-16 bg-base-300 m-auto my-2"
                        key={conn._id}
                    >
                        <img
                            src={conn.photoUrl}
                            alt=""
                            className="w-14 rounded-lg mx-2 my-2"
                        />
                        <div className="mx-2 p-2">
                            <h1>{conn.firstName}</h1>
                            <p>{conn.about}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Connections;
