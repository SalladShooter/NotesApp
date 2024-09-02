import React, { useState } from 'react';
import { googleSignIn, signUp } from './firebase'; // Make sure to import your signup function

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await signUp(email, password);
            alert("Sign Up Successful");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;