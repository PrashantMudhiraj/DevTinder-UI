import { useState } from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((store) => store.user);

    // const [userData, setUserData] = useState({
    //     firstName: user.firstName || null,
    //     lastName: user.lastName || null,
    //     age: user.age || null,
    //     photoUrl: user.photoUrl || null,
    //     about: user.about || null,
    // });/

    const [firstName, setFirstName] = useState(user?.firstName || null);
    const [lastName, setLastName] = useState(user?.lastName || null);
    const [age, setAge] = useState(user?.age || null);
    const [about, setAbout] = useState(user?.about || null);
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || null);
    return (
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
                    <p className="font-bold text-red-600"></p>
                    <button className="btn btn-primary">Save</button>
                </div>
            </div>
            <UserCard user={{ firstName, lastName, age, photoUrl, about }} />
        </div>
    );
};

export default Profile;
