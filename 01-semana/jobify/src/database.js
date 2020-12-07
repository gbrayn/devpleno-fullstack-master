import path from "path";

import sqlite from "sqlite";

const dbConnection = sqlite.open(path.resolve(__dirname, "../banco.sqlite"), {
  Promise
});

export default dbConnection;
