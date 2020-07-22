import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


function FriendsList() {
    const [friendsList, setFriendsList] = useState([]);
    
    const getData = e => {
        // e.preventDefault();
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            console.log(res)
         setFriendsList(
           res.data
         )
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return(
        <div>      
            {friendsList?.map((friendsList) => (
                <div> 
                    <p>{friendsList.username}</p>
                    <p>{friendsList.password}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;