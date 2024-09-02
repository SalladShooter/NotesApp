import React from 'react';
import { googleSignIn } from './firebase'; // Ensure you have the correct path

const GoogleSignInButton = () => {
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            alert("Google Sign-In successful");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    );
};

export default GoogleSignInButton;