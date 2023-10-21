import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
      })
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
 
  },
};

export default NextAuth(authOptions);
