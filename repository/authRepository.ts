import { User } from "../models";

export async function EmailCheck(email: string) {
    const users = await User.findAll({
        where: {
            email: email,
        },
    });
    if (users.length > 0) {
        return false;
    } else {
        return true;
    }
}

export function generateRandomString(length: number = 10, tableName: string): string {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}