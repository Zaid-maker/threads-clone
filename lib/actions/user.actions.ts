'use server'

import Community from "../models/community.model";
import User from "../models/user.model";

export async function fetchUser(userId: string) {
    try {
        return await User.findOne({ id: userId }).populate({
            path: "communities",
            model: Community,
        });
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}