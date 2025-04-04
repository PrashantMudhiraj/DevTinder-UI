import axios from "axios";
import { BASE_URL } from "../constants/appConstants";

const UserCard = ({ user }) => {
    const reviewConnection = async (usrInp, _id) => {
        try {
            await axios.post(
                BASE_URL + "/request/send/" + usrInp + "/" + _id,
                {},
                { withCredentials: true }
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex justify-center p-4">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={user?.photoUrl} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {user?.firstName} {user?.lastName}
                    </h2>
                    <p>{user?.about}</p>
                    <div className="card-actions justify-center my-2">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                reviewConnection("ignored", user?._id)
                            }
                        >
                            Ignore
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                reviewConnection("interested", user?._id)
                            }
                        >
                            Interested
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
