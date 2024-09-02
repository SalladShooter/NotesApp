import React from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import GoogleSignInButton from './GoogleSignInButton'; // Import the GoogleSignInButton
import { UserAuthContextProvider } from './UserAuthContext';

export default function App() {
    return (
        <UserAuthContextProvider>
            <div>
                <Login />
                <SignUp />
                <GoogleSignInButton /> {/* Use the GoogleSignInButton */}
            </div>
        </UserAuthContextProvider>
    );
}