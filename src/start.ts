// Type ORM use it
import "reflect-metadata";
import Server from './Server';
import { Logger } from '@overnightjs/logger';
import { ConnectionSingleton } from './database/ConnectionSingleton';

ConnectionSingleton.getInstance().startConnection().then(() => {
	const server = new Server();
	const port: number = 3000;
	server.start(port);
});

