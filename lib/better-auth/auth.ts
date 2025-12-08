// lib/auth.ts
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";
import { apiKey } from "better-auth/plugins";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (authInstance) return authInstance;

  const mongoose = await connectToDatabase();
  const db = mongoose.connection.db;
  if (!db) throw new Error("MongoDB connection not found");

  authInstance = betterAuth({
    database: mongodbAdapter(db as any),
    secret: process.env.BETTER_AUTH_SECRET!,
    baseURL: process.env.BETTER_AUTH_URL!,    // e.g. "http://localhost:3000"
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      autoSignIn: true,
    },
    plugins: [
      nextCookies(),    // for normal session / cookie-based auth
      apiKey({          // enable API-key support — no invalid fields
        // Optionally override default header name:
        // apiKeyHeaders: "X-API-KEY"
        // If you don't need custom header name, you can leave options blank:
      })
    ]
  });

  return authInstance;
};

export const auth = await getAuth();
