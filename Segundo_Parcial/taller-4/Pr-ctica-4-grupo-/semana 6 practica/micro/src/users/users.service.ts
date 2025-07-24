import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

const users: User[] = [];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: (users.length + 1).toString(),
      ...createUserDto,
    };
    users.push(newUser);
    return newUser;
  }

  findAll() {
    return users;
  }

  findOne(id: string) {
    return users.find((u) => u.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const idx = users.findIndex((u) => u.id === id);
    if (idx === -1) return undefined;
    users[idx] = { ...users[idx], ...updateUserDto };
    return users[idx];
  }

  remove(id: string) {
    const idx = users.findIndex((u) => u.id === id);
    if (idx === -1) return undefined;
    const [deleted] = users.splice(idx, 1);
    return deleted;
  }
}
