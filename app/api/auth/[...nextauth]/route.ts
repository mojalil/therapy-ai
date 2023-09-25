import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

//create the options we're going to send to nextauth to initialize it
export const authOptions = {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
      }),
    ],
  };

//create handler using nextauth to handle any get or post requests

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };