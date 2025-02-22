const UserCard = ({ user }) => {
    console.log(user);
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
                        <button className="btn btn-primary">Ignore</button>
                        <button className="btn btn-primary">Interested</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
