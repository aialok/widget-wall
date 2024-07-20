// initial-profile.ts
import axios from "axios";

export const initialProfile = async (userId: string, fullName: string, imageUrl: string, emailAddresses: any) => {
    const profileData = {
        userId,
        name: fullName,
        imageUrl,
        email: emailAddresses,
    };

    try {
        const profile = await axios.post("http://localhost:4000/api/v1/user", profileData);
        return profile.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        return null;
    }
};
