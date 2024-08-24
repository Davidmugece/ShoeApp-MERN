import React, { useState } from 'react';
import { BASE_URL } from '../utils/config';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // React Router for navigation

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // React Router navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            setLoading(true);
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const { data } = await axios.post(`${BASE_URL}/auth/login`, formData, config);
            setLoading(false);
            console.log(data.token);
            // Save user info to local storage
            localStorage.setItem('userInfo', JSON.stringify(data));
            const user = jwtDecode(data.token);
            localStorage.setItem('user', JSON.stringify(user));
            Cookies.set("token", data.token, { expires: 7 });
            navigate('/'); // Navigate to the homepage
        } catch (error) {
            setLoading(false);
            setError(error.response && error.response.data.message ? error.response.data.message : error.message);
        }
    };
    

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-3'></div>
                <div className='col-6 form-container'>
                    <h3 className="text-center mb-5">Log into Your Account</h3>
                    {error && <p>{error}</p>}
                    {loading && <p>Loading...</p>}
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mb-3'>
                            <label className='form-label fw-medium'>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className='form-control custom-input'
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label fw-medium'>Password</label>
                            <input
                                type="password"
                                name="password"
                                className='form-control custom-input'
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-center m-4">
                            <button type="submit" className="btn btn-dark custom-input-btn">Login</button>
                        </div>
                    </form>
                   
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    );
};

export default Login;



