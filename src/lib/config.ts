import 'dotenv/config';
import mongoose, { Connection } from 'mongoose';

let cached_database: Connection;

const database = async () => {

    if (cached_database) {
        return cached_database;
    }

    const uri = process.env.DATABASE_URI as string;

    const options: any = {
        useNewUrlParser: false,
        useUnifiedTopology: true,
    };

    const db = await mongoose.connect(uri, options);
    cached_database = db.connection;

    return cached_database;
};

export default database;