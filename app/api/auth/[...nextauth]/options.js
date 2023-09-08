import { NextAuthOptions } from "next-auth";
import GitHubPrvider from 'next-auth/providers/github'

import GoogleProvider from 'next-auth/providers/google'

import CredentialsProvider from "next-auth/providers/credentials";


export const options = {
    providers:[
        GitHubPrvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
        
        CredentialsProvider({
            type: 'credentials',
            name: 'Credentials',
            credentials:{
                email:{
                    label:'UserName:',
                    type:'email',
                    placeholder:'your useername'
                },
                password:{
                    label:'Password:',
                    type:'password',
                    placeholder:'your password'
                },
            },
            async authorize(credentials,req){
                //retrive data

                const user = { id: '42', emai:'dam@gmail.com' , password: '1234'}

                if ( credentials?.email === user.emai && credentials?.password === user.password ) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],

    secret: process.env.NEXTAUTH_SECRET,

    pages: {

        signIn: '/'
    },
    

}
