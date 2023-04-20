import React, {useState} from 'react';
import axios from 'axios';
import '../css/Loginpage.css'
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
    const [user, setUser] = useState({});
    let navigate = useNavigate();

    const verifyUser = (e) => {
        e.preventDefault()
        const { email, password } = user;
        const body = { email, password };
        axios.post('http://localhost:3001/api/login', body).then(res => {
            const token = res.data.token;
            localStorage.setItem('token', JSON.stringify(token))
            if(token){
                navigate('/dashboard');
            }
            
        }).catch(err => {
            console.log(err)
        })
    }

    const setInput = (event, name) => {
        const value = event.target.value;
        setUser({ ...user, [name]: value })
    }

    return (
        <form className='container'>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" name='email' autoComplete='off' value={user.email} placeholder="Enter email*" onChange={(e) => setInput(e, 'email')} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" name='password' value={user.password} placeholder="Password*" onChange={(e) => setInput(e, 'password')} />
                        </div>
                        <button type="button" class="btn btn-primary" onClick={(e) => verifyUser(e)}>Submit</button>
                    </div>
                </div>

            </form>
    );
}

export default LoginPage;