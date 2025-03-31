import { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants/appConstants";
import { addUser } from "../redux/slice/userSlice";

const EditProfile = ({ user }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(user?.firstName || null);
    const [lastName, setLastName] = useState(user?.lastName || null);
    const [age, setAge] = useState(user?.age || null);
    const [about, setAbout] = useState(user?.about || null);
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || null);
    const [error, setError] = useState("");
    const [toast, setToast] = useState(false);

    // const [userData, setUserData] = useState({
    //     firstName: user.firstName || null,
    //     lastName: user.lastName || null,
    //     age: user.age || null,
    //     photoUrl: user.photoUrl || null,
    //     about: user.about || null,
    // });/

    const saveProfile = async () => {
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    age,
                    photoUrl,
                    about,
                },
                {
                    withCredentials: true,
                }
            );

            dispatch(addUser(res?.data?.data));
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 2000);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            {toast && (
                <div className="toast toast-top toast-center mt-16">
                    <div className="alert alert-info px-14">
                        <span>Profile Saved!</span>
                    </div>
                </div>
            )}
            <div className="flex justify-center my-16">
                <div className="card bg-base-300 w-1/4 shadow-xl my-2">
                    <div className="card-body">
                        <h1 className=" flex justify-center p-2 font-bold">
                            Edit Profile
                        </h1>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                value={firstName}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text">Age</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text">Photo Url</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text">About</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="card-actions justify-center my-2">
                        <p className="font-bold text-red-600">{error}</p>
                        <button
                            className="btn btn-primary"
                            onClick={saveProfile}
                        >
                            Save
                        </button>
                    </div>
                </div>
                <UserCard
                    user={{
                        firstName,
                        lastName,
                        age,
                        photoUrl,
                        about,
                        _id: user._id,
                    }}
                />
            </div>
        </div>
    );
};

export default EditProfile;
