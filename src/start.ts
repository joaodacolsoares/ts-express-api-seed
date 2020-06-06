// Type ORM use it
import "reflect-metadata";
import Server from './Server';
import Connection from './database/Connection';
import { Logger } from '@overnightjs/logger';

Connection.getInstance();
Connection.getInstance().getConnection().then( () => {
  Logger.Imp("System Connected to Database");
})

const server = new Server();
const port : number = 3000;

server.start(port);