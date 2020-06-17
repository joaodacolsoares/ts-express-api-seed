import { Controller, Get, Post } from "@overnightjs/core";
import { Response, Request } from 'express';
import { ConnectionSingleton } from '../database/ConnectionSingleton';
import { User } from '../database/entities/User';
import { Connection, Repository } from 'typeorm';
import { Photo } from '../database/entities/Photo';

@Controller('user')
export class UserController {

	private userRepository: Repository<User>;

	constructor() {
		this.userRepository = ConnectionSingleton.getInstance().getRepository(User);
	}

	@Get()
	async getUser(request: Request, response: Response): Promise<void> {
		const users = await this.userRepository.find({ relations: ['photos'] });
		response.status(200).send(users);
	}

	@Get(':id')
	async getUserById(request: Request, response: Response): Promise<void> {
		const { id } = request.params;
		const user = await this.userRepository.findOne(id, { relations: ['photos'] });
		response.status(200).send(user);
	}

	@Post()
	async postUser(request: Request, response: Response): Promise<void> {
		const { firstName, lastName, isActive } = request.body;
		const user = new User(firstName, lastName, isActive, []);
		await this.userRepository.save(user);
		response.status(200).send(user);
	}
}