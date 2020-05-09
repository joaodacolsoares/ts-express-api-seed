import {createConnection, Connection} from "typeorm";
import { User } from "./entities/User";

class ConnectionSingleton {
  private static instance: ConnectionSingleton;

  private connection : Connection;

  private constructor() { }

  public async getConnection() : Promise<Connection> {
    if(!this.connection) {
      this.connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "user",
        password: "user",
        database: "testDB",
        entities: [__dirname + './entities/*'],
        dropSchema: true,
        synchronize: true,
        logging: true
      })
    }

    return this.connection
  }

  public static getInstance(): ConnectionSingleton {
    if (!ConnectionSingleton.instance) {
      ConnectionSingleton.instance = new ConnectionSingleton();
    }

    return ConnectionSingleton.instance;
  }
}

export default ConnectionSingleton;