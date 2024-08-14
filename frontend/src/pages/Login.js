import React from 'react';

const Login = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-4">
                <h1 className="text-center mb-4">Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-4">
                        Login
                    </button>
                    <p className="text-center mt-3">Sign up <a href="/Signup">here</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;

