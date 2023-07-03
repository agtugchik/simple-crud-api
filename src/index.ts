import { server } from "./modules/server";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { configType } from "./types/configType";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "../.env");
const config = dotenv.config({ path: envPath });

const hostname = (config.parsed as configType).HOST || "127.0.0.1";
const port = Number((config.parsed as configType).PORT) || 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
