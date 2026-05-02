import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
// setting up the google provider for the login & sign up
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
})
