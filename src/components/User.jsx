import React, { useState } from "react";
import { useEffect } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    getUser();
  }, []);

  const { gender, name, email, picture, dob } = user;

  return (
    <div className="border border-danger text-center m-auto mt-3 border-5 rounded-5 bg-info w-25 p-4">
      <h1>
        Name: {name?.title} {name?.first} {name?.last}
      </h1>
      <img className="rounded-5" src={picture?.large} alt="img" />
      <p>Email : {email}</p>
      <h4> Gender: {gender}</h4>
      <h5>
        Dob: {new Date(dob?.date).toLocaleDateString("tr-TR")} Age:{dob?.age}
      </h5>
      <button className="btn btn-danger p-3" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
