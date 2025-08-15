import { registerDb, communityDb } from "./lib/db.js";

registerDb.once("open", () => console.log("Register DB test connected"));
communityDb.once("open", () => console.log("Community DB test connected"));
