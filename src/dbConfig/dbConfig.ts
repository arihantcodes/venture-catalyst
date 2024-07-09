import mongoose from "mongoose";

export async function connectDb(): Promise<void> {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI);
    
    const connection = mongoose.connection;
    
    connection.on('connected', () => {
      console.log('Connected to DB');
    });
    
    connection.on('error', (error: Error) => {
      console.log('Something went wrong while connecting to DB');
      console.error(error);
      process.exit(1);
    });
  } catch (error:any) {
    console.log('Something went wrong while connecting to DB');
    console.error(error);
  }
}