import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { initialProfile } from "./lib/initial-profile";

function Login() {
    const [profile, setProfile] = useState<any>(null);
    const { isSignedIn, user, isLoaded } = useUser();

    const getProfile = async () => {
        if (isSignedIn && user && isLoaded) {
            console.log('Fetching profile');
            try {
                const profileData = await initialProfile(user.id, 
                    user.fullName as string, user.imageUrl, user.emailAddresses[0].emailAddress);
                console.log(profileData);
                setProfile(profileData);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        }
    };

    useEffect(() => {
        getProfile();
    }, [isSignedIn, user, isLoaded]);

    // Import your publishable key
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

    if (!PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key");
    }

    return (
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                <UserButton />
                {profile && <div>{/* Render profile information here */}</div>}
            </SignedIn>
        </div>
    );
}

export default Login;
