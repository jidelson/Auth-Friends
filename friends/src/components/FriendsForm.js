import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFriendValues = {
    name:'',
    age:'',
    email:''
}

function FriendsForm(props) {
    
    const [friendsFormValues, setFriendsFormValues] = useState([]);
    
   

    const handleChange = e => {
        setFriendsFormValues({...friendsFormValues, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        addFriend()
    }

    const addFriend = e => {
        const newFriend = {
            name: friendsFormValues.name,
            age: friendsFormValues.age,
            email: friendsFormValues.email
        }   
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            setFriendsFormValues(initialFriendValues)
            props.history.push("/newOne")
        })
        .catch(err => console.log(err))
    }
    return(
        <div>      
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                    id='name'
                    name='name'
                    type='text'
                    value={friendsFormValues.name}
                    onChange={handleChange}
                    />
                </label>
                <label>Age:
                    <input 
                    id='age'
                    name='age'
                    type='text'
                    value={friendsFormValues.age}
                    onChange={handleChange}
                    />
                </label>
                <label>Email:
                    <input 
                    id='email'
                    name='email'
                    type='text'
                    value={friendsFormValues.email}
                    onChange={handleChange}
                    />
                </label>
                
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default FriendsForm;