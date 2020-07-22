import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const initialLoginFormValues = {
    username: '',
    password: ''    
}

function LoginForm(props) {

    // const [isLoading, setIsLoading] = useState('');
    const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues);

    const onInputChange = e => {
        setLoginFormValues({
            ...loginFormValues,
            [e.target.name]: e.target.value
         })
    }

    const onLogin = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', loginFormValues)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            props.history.push("/protected");
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={onLogin}>
                <label> Username:
                    <input 
                    id='username'
                    name='username'
                    type='text'
                    value={loginFormValues.username}
                    onChange={onInputChange}
                    />
                </label>
                <label>Password:
                    <input 
                    id='password'
                    name='password'
                    type='text'
                    value={loginFormValues.password}
                    onChange={onInputChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;