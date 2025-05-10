import appLoader from "./express.js";
import mongoLoader from "./mongoose.js"

export default async (app) => {
    await appLoader(app);
    console.log("Express iniciado");
    await mongoLoader(process.env.DB_URL);
    console.log("Mongo conectado");
}
