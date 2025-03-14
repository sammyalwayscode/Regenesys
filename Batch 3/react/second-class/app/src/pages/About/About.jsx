import { useSelector } from "react-redux";
import './About.css'
import { useEffect, useState } from "react";

const About = () => {
  const stateValue = useSelector((state) => {
    return state.myReducer.myValue;
  });

  const [getData, setGetData] = useState([])

  const getAPIData = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setGetData(data)
    console.log('From the function',data)
  }


  // const getAPIData = async() =>{
  // try {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   setGetData(data)
  //   console.log('From the function',data)
  // } catch (error) {
  //   console.log('An Error Occoured',error)
  // }
  // }

  console.log('From use State',getData)

  

  useEffect(()=>{
    getAPIData()
  }, [])

  return (
    <div>
      <h1>
        About value of{" "}
        <span
          style={{
            color: "red",
          }}
        >
          {stateValue}{" "}
        </span>{" "}
      </h1>
      <h2>Getting an API from JSonplaceholder with Fetch</h2>

    <div className="aboutTableContainer">
    <table>
       <thead>
       <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street Address</th>
            <th>City Address</th>
            <th>Phone No</th>
            <th>Website</th>
            <th>Company Name</th>
        </tr>
        </thead>        
        <tbody>
       {getData.map((userData, i)=>(
         <tr key={i}>
         <td> {userData.id} </td>
         <td> {userData?.name} </td>
         <td> {userData.username} </td>
         <td> {userData.email} </td>
         <td> {userData.address.street} </td>
         <td> {userData.address.city} </td>
         <td> {userData.phone} </td>
         <td> <a href={`https://${userData.website}`}>www.{userData.website}</a> </td>
         <td> {userData.company.name} </td>
     </tr>
       ))}
        </tbody>
        
    </table>
    </div>
    </div>
  );
};

export default About;
