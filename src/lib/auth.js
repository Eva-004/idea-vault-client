import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns";
import { jwt } from "better-auth/plugins";
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('ideavault');
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
   emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
    session:{
      cookieCache:{
        enabled: true,
        strategy: 'jwt',
        maxAge: 7 * 14 * 60 * 60
      }
    },
      plugins: [
        jwt(), 
    ]
});