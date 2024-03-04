import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const GetUsersByBusId = () => {

  const [userDetails, setUserDetails] = useState([])
  const {busId} = useParams();
  // console.log(busId)
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/${busId}/alldetails`)
        const data = await response.json();
        // console.log(data);
        const userDetailsArray = await Promise.all(
          data.getDetails.map(async (details) => {
            const userResponse = await fetch(`http://localhost:4000/api/${details.user}/userdetails`)
            const userData = await userResponse.json();
            // console.log(userData)
            return {
              userId:details.user,
              userName: userData.user.firstName,
              userEmail: userData.user.email,
              userMobile: userData.user.mobile,
              date: details.date
            };
          })
        )
        setUserDetails(userDetailsArray);
      } catch (error) {
        console.error("Error in getting ticket details:", error);
      }
    }

    fetchUserDetails()
  }, [busId])
  
  return (
    <div>
      <h1>GetUsersByBusId
      <ul>
        {userDetails.map(({ userId, userName, userEmail, userMobile,date }) => (
          <li key={userId}>
             Name: {userName}, Email: {userEmail}, Mobile: {userMobile}, Date of Booking: {date}
          </li>
        ))}
      </ul>
      </h1>
    </div>
  )
}

export default GetUsersByBusId




