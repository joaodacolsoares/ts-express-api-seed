import { createConnection, Connection, ObjectType, EntitySchema, Repository } from "typeorm";

export class ConnectionSingleton {
  private static instance: ConnectionSingleton;

  private connection: Connection;

  private constructor() { }

  public async startConnection(): Promise<Connection> {
    /* 
    If you are implementing this, get the values from the ENV
    */
    if (!this.connection) {
      this.connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "admin",
        database: "bd2",
        entities: [__dirname + '/entities/*'],
        dropSchema: false,
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

  public getRepository<Entity>(target: ObjectType<Entity> | EntitySchema<Entity>): Repository<Entity> {
    return this.connection.getRepository(target);
  }
}
