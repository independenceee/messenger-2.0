import NextAuth from "next-auth";
import FacbookProvider from "next-auth/providers/facebook";

const authOptions = {
    providers: [
        FacbookProvider({
            clientId: process.env.FACEBOOK_ID!,
            clientSecret: process.env.FACEBOOK_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: "/auth/signin",
    },
};

export { authOptions };

export default NextAuth(authOptions);
