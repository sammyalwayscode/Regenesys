import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [userData, setUserData] = useState([]);
  console.log(userName, email, bio);

  const sendMyUserData = (e) => {
    e.preventDefault();
    setUserData([
      ...userData,
      { myUserName: userName, myEmail: email, myBio: bio },
    ]);
    setUserName("");
    setEmail("");
    setBio("");
  };

  console.log(userData);

  return (
    <div>
      <h1>User Form Data</h1>
      <form onSubmit={sendMyUserData} className="formSection">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Bio"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
        />
        <button type="submit">Submit Form</button>
      </form>
      <h1>User Info</h1>
      <section className="cardSection">
        {userData.map((myData) => (
          <div className="formCard">
            <h2>Name: {myData.myUserName}</h2>
            <i>Email: {myData.myEmail}</i>
            <p>Bio: {myData.myBio}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
