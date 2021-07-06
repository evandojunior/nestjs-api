import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private repository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    const client = this.repository.create(createClientDto);
    return this.repository.save(client);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const updateResult = await this.repository.update(id, updateClientDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Client, id);
    }
    return this.repository.findOne(id);
  }

  async remove(id: number) {
    const deleteResult = await this.repository.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Client, id);
    }
  }
}
