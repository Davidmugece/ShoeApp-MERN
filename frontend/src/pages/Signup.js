import React from 'react';

const Signup = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-4">
                <h1 className="text-center mb-4">Signup</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select className="form-control" id="role">
                            <option>Select your role</option>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-4">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

