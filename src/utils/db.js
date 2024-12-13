// src/utils/mongodb.js
import mongoose from "mongoose";

let isConnected = false; // Track connection state

const dbConnect = async () => {
  if (isConnected) {
    return;
  }

  try {
    const uri = process.env.MONGODB_URI;
    const db = await mongoose.connect(uri, { dbName: "foursteps1" });
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default dbConnect;
