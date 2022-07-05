import NextAuth from 'next-auth'
import FacebookProvider from "next-auth/providers/facebook";

const options = {
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
          if (account && user) {
            return {
              accessToken: account.access_token,
              accessTokenExpires: Date.now() + account.expires_at * 1000,
              refreshToken: account.refresh_token,
              user,
            }
          }
    
          if (Date.now() < token.accessTokenExpires) {
            return token
          }
    
          return refreshAccessToken(token)
        },
        async session({ session, token }) {
          session.user = token.user
          session.accessToken = token.accessToken
          session.error = token.error
    
          return session
        },
    }    
}

export default (req, res) => NextAuth(req, res, options)
